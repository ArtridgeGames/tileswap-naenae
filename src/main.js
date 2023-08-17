import './assets/css/main.css';
import './assets/css/slider.css';

import { createApp } from 'vue';
import { createPinia, setActivePinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

setActivePinia(pinia);

app.use(router);
app.use(pinia);

app.mount('#app');