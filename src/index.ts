import Vue from "vue";
import VueRouter from 'vue-router';
import Loader from "./components/loader/loaderComponent.vue";
import AboutMe from "./components/about-me/AboutMeComponent.vue";
import Navigation from "./components/navigation/navigationComponent.vue";
import Projects from "./components/projects/projectsComponent.vue";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: AboutMe },
    { path: '/projects', component: Projects }
]

const router = new VueRouter({
    routes
})

let app = new Vue({
    el: "#app",
    router,
    data: { name: "World" },
    components: {
        Loader,
        AboutMe,
        Navigation,
        Projects,
    }
});

