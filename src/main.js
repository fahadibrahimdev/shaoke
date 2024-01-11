import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    once: true,
    duration: 1200
});

import VueGoogleMaps from '@fawmi/vue-google-maps';

const app = createApp(App)

app
    .use(router)
    .use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyCEmD75xZcZ5L72rrw1RFtwcY9HXsW7JCI',
        },
    })

app.mount('#app')
