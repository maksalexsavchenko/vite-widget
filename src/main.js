import { createApp } from 'vue';
import App from './App.vue';
import WidgetComponent from "./components/WidgetComponent.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        name: 'Home',
        path: '/vite-widget',
        component: WidgetComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


const app = createApp(App);

app.use(router)

app.mount('#root');
