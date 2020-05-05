import Vue from "vue";

import Routes from "@/router/index";
import App from "@/App";

const app = new Vue({
    el: "#app",
    router: Routes,
    render: h => h(App)
});

export default app;
