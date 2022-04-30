import { createRouter, createWebHistory } from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'

const routes = [
    movieRouter,
    mineRouter,
    cinemaRouter,
    {
        path: '/*',
        redirect: '/movie'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router