<template>
	<div class="overview">
		<div class="overview-header">
			<h3 class="header-title">{{ movieDetail.title }}</h3>
			<p class="header-tagline">{{ movieDetail.tagline }}</p>
			<p class="header-time mb-3">
				{{ movieDetail.release_date }} &bull; {{ convertedRuntime }}
			</p>
			<v-row class="mx-0">
				<v-rating
					:value="movieDetail.vote_average / 2"
					color="amber"
					background-color="amber"
					dense
					half-increments
					readonly
					size="16"
				/>
				<div class="header-rating ml-4">
					{{ movieDetail.vote_average.toFixed(2) }} ({{
						movieDetail.vote_count
					}})
				</div>
			</v-row>
		</div>
		<div class="overview-genres mt-6">
			<h3 class="genres-title mb-1">Genres</h3>
			<div class="genres-container d-flex flex-wrap">
				<v-chip
					class="genres-item mr-3 mb-3"
					v-for="genre in movieDetail.genres"
					:key="genre.id"
					label
					outlined
					small
				>
					<v-icon left small>mdi-play-circle</v-icon>
					{{ genre.name }}
				</v-chip>
			</div>
		</div>
		<div class="overview-synopsis mt-1">
			<h3 class="synopsis-title mb-1">Synopsis</h3>
			<p class="synopsis-caption mb-5">{{ movieDetail.overview }}</p>
		</div>
		<div class="overview-actions d-flex flex-wrap mb-n3 mb-md-0">
			<v-btn
				class="mr-3 mb-3 mb-md-0"
				rounded
				outlined
				tag="a"
				:href="movieDetail.homepage"
				target="_blank"
				noreferer
				:small="$vuetify.breakpoint.xs"
			>
				<v-icon left>mdi-web</v-icon>
				Website
			</v-btn>
			<v-btn
				class="mr-3 mb-3 mb-md-0"
				rounded
				outlined
				tag="a"
				:href="`https://www.imdb.com/title/${movieDetail.imdb_id}`"
				:small="$vuetify.breakpoint.xs"
				target="_blank"
				noreferer
			>
				<v-icon left>mdi-star-circle</v-icon>
				IMDB
			</v-btn>
			<movie-videos v-if="movieVideos.results" :movieVideos="movieVideos" />
		</div>
	</div>
</template>
<script>
export default {
	name: 'MovieOverview',
	props: {
		movieDetail: Object,
	},
	components: {
		MovieVideos: () => import('@/components/Movie/MovieVideos'),
	},
	computed: {
		convertedRuntime() {
			const hours = Math.floor(this.movieDetail.runtime / 60)
			const minutes = this.movieDetail.runtime % 60
			return `${hours}h ${minutes}m`
		},
		movieVideos() {
			return this.$store.getters['movie/getMovieVideos']
		},
	},
	async created() {
		const movieId = this.$route.params.id

		if (movieId) {
			await this.$store.dispatch('movie/movieVideos', movieId)
		}
	},
}
</script>
<style lang="scss" scoped>
.header {
	&-title {
		font-size: 1.5em;
		word-break: break-word;
	}
	&-rating {
		font-size: 0.813em;
		padding-top: 0.25rem;
	}
}
.synopsis {
	&-caption {
		font-size: 0.875em;
		line-height: 1.75em;
		word-break: break-word;
	}
}
</style>
