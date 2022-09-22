require('./bootstrap');

require('alpinejs');

import { createApp } from "vue";
import router from './router'
import ProduksIndex from './components/produks/ProduksIndex'

createApp({
    components: {
        ProduksIndex
    }
}).use(router).mount('#app')
