import { asyncRoutes, constantRoutes } from '@/router'

export function handleMenuRoutes(routes) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (tmp.list) {
      tmp.children = handleMenuRoutes(tmp.list)
    }
    res.push({
      name: tmp.name,
      alwaysShow: tmp.children && tmp.children.length ? true : false,
      meta: {
        icon: tmp.children && tmp.children.length ? 'tree' : '',
        title: tmp.name
      },
      path: tmp.url,
      children: tmp.children
    })
  })
  return res
}

const realRoutes = asyncRoutes

export function handleAsyncRoutes(routes) {
  routes.forEach(route => {
    if (!route.list || !route.list.length) {
      realRoutes[0].children.push({
        path: route.url,
        name: route.name,
        meta: { title: route.name },
        component: resolve => require(['@/views/' + route.url + '.vue'], resolve)
      })
    } else {
      handleAsyncRoutes(route.list)
    }
  })
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  buildRoutes({ commit }, userMenus) {
    return new Promise(resolve => {
      const menuRoutes = handleMenuRoutes(userMenus)
      handleAsyncRoutes(userMenus)
      commit('SET_ROUTES', menuRoutes)
      resolve(realRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
