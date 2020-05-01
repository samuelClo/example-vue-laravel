import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import(/* webpackChunkName: "Home" */ "@/pages/Home.vue");
const About = () => import(/* webpackChunkName: "About" */ "@/pages/About.vue");
const PageNotFound = () => import(/* webpackChunkName: "404" */ "@/pages/404.vue");

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "*",
            name: "404",
            component: PageNotFound
        }
    ]
});

export default router;
