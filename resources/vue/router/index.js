import Vue from "vue";
import Router from "vue-router";
import publicRoutes from "@/router/routes/public";

const PublicLayout = () => import(/* webpackChunkName: "PublicLayout" */ "@/layouts/PublicLayout");

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: "/",
            component: PublicLayout,
            children: publicRoutes
        }
    ]
});

export default router;
