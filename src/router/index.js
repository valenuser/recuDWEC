import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/LoginView'
import RegisterView from '@/views/RegisterView'
import SearchView from '@/views/SearchView'
import ReservaView from '@/views/ReservaView'


const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/registrarse',
    name: 'registrarse',
    component: RegisterView
  },
  {
    path: '/buscar',
    name: 'buscar',
    component: SearchView
  },
  {
    path: '/reserva/:id',
    name: 'reserva',
    component: ReservaView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
