import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/Home.vue';
import ServicesJardins from '../src/ServicesJardins.vue';
import ServicesTaille from '../src/ServicesTaille.vue';
import Biocontrole from '../src/Biocontrole.vue';
import Contact from '../src/Contact.vue';

const base = import.meta.env.VITE_BASE_URL;

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/services-au-jardin', name: 'ServicesJardins', component: ServicesJardins },
    { path: '/services-de-la-taille', name: 'ServicesTaille', component: ServicesTaille },
    { path: '/services', name: 'Biocontrole', component: Biocontrole },
    { path: '/contactez-moi', name: 'Contact', component: Contact },
  ];

const router = createRouter({
    history: createWebHistory(base),
    routes,
});

export default router;