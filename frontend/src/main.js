import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { BootstrapVue3, IconsPlugin } from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import { createI18n } from 'vue-i18n';


const messages = {
	en: {
	message: {
	hello: 'Hello World'
	}
},
	pl: {
	message: {
	hello: 'Cześć'
	}
}
};

const i18n = createI18n({
	locale: 'en',
	fallbackLocale: 'en',
	messages,
}); 


const app = createApp(App);

app.use(BootstrapVue3);
app.use(IconsPlugin);
app.use(router);
app.use(i18n);
app.mount('#app');

