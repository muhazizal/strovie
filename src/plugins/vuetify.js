import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: "#bb86fc",
        secondary: "#03dac6",
        accent: "#ffffff",
        error: "#cf6679",
        // info: "#2196F3",
        // success: "#4CAF50",
        // warning: "#FFC107",
      },

      light: {
        primary: "#6200ee",
        secondary: "#03dac6",
        accent: "#ffffff",
        error: "#b00020",
        // info: "#2196F3",
        // success: "#4CAF50",
        // warning: "#FFC107",
      },
    },
  },
});
