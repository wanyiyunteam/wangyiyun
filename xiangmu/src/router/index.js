import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../layout/Index'
import My from '../layout/My'
import playSong from '../layout/playSong'
import muiseList from '../layout/muiseList'
import Search from "../layout/Search"
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/muiseList',
      name: 'muiseList',
      component: muiseList
    },
    {
      path: '/playSong',
      name: 'playSong',
      component:playSong
    },
    {
      path: '/Search',
      name: 'Search',
      component:Search
    }
  ]
})
