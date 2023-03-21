import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@fortawesome/fontawesome-free/css/all.css";
import "animate.css/animate.css";

const app = createApp(App);

const vuetify = createVuetify({
	components,
	directives,
	icons: {
		defaultSet: "fa",
		aliases,
		sets: {
			fa,
		},
	},
});

app.use(router).use(vuetify);

app.mount("#app");
