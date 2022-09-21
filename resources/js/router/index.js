import { createRouter, createWebHistory } from 'vue-router'

import ProdukIndex from '../components/produk/ProdukIndex.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'companies.index',
        component: ProdukIndex
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})
