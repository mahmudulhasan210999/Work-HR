import { createRouter, createWebHistory } from "vue-router";

import Clients from '../views/Clients.vue';
import Profile from '../views/Profile.vue';
import Clients1 from '../views/Clients-list.vue';

import Payroll from '../components/payroll.vue';
import Payslip from '../components/payslip.vue';

import PayrollItems from '../views/Payroll-items.vue'

const routes = [
  {
    path: '/',
    name: 'clients',
    component: Clients
  },
  {
    path: '/clients-list',
    name: 'clients-list',
    component: Clients1
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: Profile
  },


  {
    path: '/payroll',
    name: 'payroll',
    component: Payroll
  },
  {
    path: '/payslip/:id',
    name: 'payslip',
    component: Payslip
  },
  {
    path: '/payroll-items',
    name: 'payroll-items',
    component: PayrollItems
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router