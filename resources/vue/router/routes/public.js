const Home = () => import(/* webpackChunkName: "Home" */ "@/pages/Home");
const About = () => import(/* webpackChunkName: "About" */ "@/pages/About");
const NotFound = () => import(/* webpackChunkName: "404" */ "@/pages/404");

export default [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "about",
        name: "about",
        component: About
    },
    {
        path: "*",
        name: "404",
        component: NotFound
    }
];
