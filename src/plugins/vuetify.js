import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#bb86fc",
        secondary: "#03dac6",
        accent: "#ffffff",
        error: "#cf6679",
      },

      dark: {
        primary: "#6200ee",
        secondary: "#03dac6",
        accent: "#ffffff",
        error: "#b00020",
      },
    },
  },
});
