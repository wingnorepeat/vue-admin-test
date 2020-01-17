import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

import { menuList } from '@/api/data'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // 开始进程
  NProgress.start()

  // 设置页面title
  document.title = getPageTitle(to.meta.title)

  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // 如果已经登录，重定向至首页
      next({ path: '/' })
      NProgress.done()
    } else {
      // 获取菜单权限
      const hasRoutes = store.getters.permission_routes && store.getters.permission_routes.length > 0
      if (hasRoutes) {
        next()
      } else {
        try {
          const userMenus = await store.dispatch('user/getMenus')
          // const userMenus = menuList
          const accessRoutes = await store.dispatch('permission/buildRoutes', userMenus)
          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* 当无token时*/
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 完成进程
})
