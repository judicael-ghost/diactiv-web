import { RouteRecordRaw } from 'vue-router';
import Layout from 'layouts/Layout.vue';
import Partenaire from 'pages/Partenaire.vue';
import Utilisateur from 'pages/Utilisateur.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: 'partenaire', component: Partenaire },
      { path: 'utilisateur', component: Utilisateur },
      { path: '', redirect: 'utilisateur' },
    ],
  },
];

export default routes;
