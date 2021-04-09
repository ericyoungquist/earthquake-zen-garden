import Vue from 'vue';
import VueRouter from 'vue-router';
import EarthquakeList from '../views/EarthquakeList.vue';
import EarthquakeDetails from '../views/EarthquakeDetails.vue';
import UserProfile from '../views/UserProfile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'EarthquakeList',
    component: EarthquakeList
  },
  {
    path: '/earthquake/:id',
    name: 'EarthquakeDetails',
    component: EarthquakeDetails,
    props: true
  },
  {
    path: '/user-profile/:userId',
    name: 'UserProfile',
    component: UserProfile,
    props: true
  } 
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
