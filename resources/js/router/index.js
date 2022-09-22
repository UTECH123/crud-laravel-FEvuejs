import { createRouter, createWebHistory } from "vue-router";

import ProduksIndex from '../components/produks/ProduksIndex'
import ProduksCreate from '../components/produks/ProduksCreate'
import ProduksEdit from '../components/produks/ProduksEdit'

const routes = [
    {
        path: '/dashboard',
        name: 'produks.index',
        component: ProduksIndex
    },
    {
        path: '/produks/create',
        name: 'produks.create',
        component: ProduksCreate
    },
    {
        path: '/produks/:id/edit',
        name: 'produks.edit',
        component: ProduksEdit,
        props: true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
