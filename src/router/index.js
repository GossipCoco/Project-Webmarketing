import { createWebHistory, createRouter } from "vue-router";

import Accueil from "../components/Page/Accueil";
import Home from "../components/Page/Home";

const routes = [
    {
        path: '/',
        name: 'Accueil',
        component: Accueil
      },    {
        path: '/Home',
        name: 'Home',
        component: Home
      },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
  