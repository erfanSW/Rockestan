import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import index from '@/components/Songs/index'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong'
import EditSong from '@/components/EditSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/index',
      name: 'songs',
      component: index
    }, {
      path: '/index/create',
      name: 'songs-create',
      component: CreateSong
    }, {
      path: '/index/:songId',
      name: 'song',
      component: ViewSong
    }, {
      path: '/index/:songId/edit',
      name: 'song-edit',
      component: EditSong
    },
    {
      path: '*',
      redirect: { name: 'songs' }
    }
  ]
})
