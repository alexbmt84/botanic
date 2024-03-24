import { createApp } from 'vue';
import App from './App.vue';
import router from '../routes/router.js';
import "./assets/app.css";

createApp(App).use(router).mount('#app');
