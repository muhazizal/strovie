<template>
	<v-col class="col-6 col-sm-4 col-lg-3 col-xl-2">
		<router-link
			:to="`/movie/${movie.id}`"
			:key="$route.path"
			class="movie-link"
		>
			<movie-poster :movieDetail="movie">
				<template v-slot:movie-item>
					<v-card-title class="pb-1 px-3 font-weight-bold">{{
						movie.title
					}}</v-card-title>
					<v-card-text class="pb-0 px-3">
						{{ movie.release_date }}
					</v-card-text>
					<v-card-text class="px-3 pb-6">
						<v-row class="rating mx-0">
							<v-rating
								:value="1"
								length="1"
								color="amber"
								background-color="amber"
								dense
								readonly
								size="20"
							/>
							<div class="rating ml-1">
								{{ movie.vote_average.toFixed(2) }} ({{ movie.vote_count }})
							</div>
						</v-row>
					</v-card-text>
				</template>
			</movie-poster>
		</router-link>
	</v-col>
</template>
<script>
export default {
	name: 'MovieListItem',
	props: {
		movie: Object,
	},
	components: {
		MoviePoster: () => import('./MoviePoster.vue'),
	},
}
</script>
<style lang="scss" scoped>
.movie-link {
	text-decoration: none;
}
.v-card {
	transition: box-shadow 0.5s;
	&__title {
		font-size: 0.875em;
		line-height: 1.25rem;
		word-break: break-word;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	&__text {
		font-size: 0.75em;
		font-weight: 500;
	}
	&:hover {
		box-shadow: 0px 0px 15px 3px lightgrey !important;
	}
	.rating {
		font-weight: 500;
		padding-top: 1.5px;
	}
	.v-image {
		min-height: 18.75rem;
	}
}
</style>
