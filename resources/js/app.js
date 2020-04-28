import Vue from 'vue'

import Routes from '@/js/routes.js'
import App from '@/js/views/App'

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App),
})

export default app
