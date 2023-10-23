import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from '@/views/Details.vue'
import CreatePost from '@/views/CreatePost.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/',
    name: 'CreatePost',
    component: CreatePost
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
