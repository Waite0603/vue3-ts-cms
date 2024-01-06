import { createRouter, createWebHistory } from 'vue-router'

import { start, close } from './nprogress'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      redirect: '/'
    },
    {
      path: '/',
      name: '登录',
      meta: { title: '登录' },
      component: () => import('../views/UserLogin.vue')
    },
    {
      path: '/index',
      name: '首页',
      meta: { title: '首页' },
      component: () => import('../views/IndexView.vue'),
      children: [
        {
          path: '',
          name: '主页',
          meta: { title: '主页' },
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'mine',
          name: '个人中心',
          meta: { title: '个人中心' },
          component: () => import('../views/user/MineView.vue')
        },
        {
          path: 'setPwd',
          name: '修改密码',
          meta: { title: '修改密码' },
          component: () => import('../views/user/SetPwdView.vue')
        },
        {
          path: 'role',
          name: '角色管理',
          meta: { title: '角色管理' },
          component: () => import('../views/user/RoleView.vue')
        },
        {
          path: 'user',
          name: '用户管理',
          meta: { title: '用户管理' },
          component: () => import('../views/user/UserView.vue')
        },
        {
          path: 'roomType',
          name: '房型管理',
          meta: { title: '房型管理' },
          component: () => import('../views/room/RoomTypeView.vue')
        },
        {
          path: 'room',
          name: '房间管理',
          meta: { title: '房间管理' },
          component: () => import('../views/room/RoomView.vue')
        },
        {
          path: 'liveIn',
          name: '入住用户',
          meta: { title: '入住用户' },
          component: () => import('../views/custom/LiveInView.vue')
        }
      ]
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 开始进度条
  start()
  next()
})

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = ('CMS-' + to.meta.title) as string
  }
  // 关闭进度条
  close()
})

export default router
