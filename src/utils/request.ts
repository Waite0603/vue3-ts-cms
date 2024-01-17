import axio from 'axios'
import { baseURL_dev } from '../config/baseURL'

import { ElMessage } from 'element-plus'
import router from '../router'
import { useUserStore } from '../store/user'

const userStore = useUserStore()

// 初始化 axios 对象
const service = axio.create({
  baseURL: baseURL_dev,
  timeout: 3000
})

const updateIsMobile = () => {
  const isMobile: boolean = window.innerWidth <= 1200
  if (isMobile) {
    const sidenavMain = document.getElementById('sidenav-main')
    const btnShowSidebar = document.getElementById('btn-show-sidebar')
    if (sidenavMain) {
      sidenavMain.classList.add('d-none')
    }
    if (btnShowSidebar) {
      btnShowSidebar.classList.remove('d-none')
    }
  } else {
    const sidenavMain = document.getElementById('sidenav-main')
    const btnShowSidebar = document.getElementById('btn-show-sidebar')
    if (sidenavMain) {
      sidenavMain.classList.remove('d-none')
    }
    if (btnShowSidebar) {
      btnShowSidebar.classList.add('d-none')
    }
  }
}
// 请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  updateIsMobile()
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
})

let isTokenExpired = false

// 响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    const res = response.data
    if (res.code !== 200) {
      // 401: token 过期
      if (res.code === 401) {
        if (!isTokenExpired) {
          isTokenExpired = true
          userStore.clearUser()
          // 面对多个请求同时过期的情况，只弹出一次提示
          ElMessage.warning('登录过期，请重新登录')
          router.push('/login')
        }
      }
    } else {
      return response
    }
    return response
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 封装 get 请求
export const $get = async (url: string, params: object = {}) => {
  const { data } = await service.get(url, { params })
  return data
}

// 封装 post 请求
export const $post = async (url: string, data: object = {}) => {
  const result = await service.post(url, data)
  return result
}
