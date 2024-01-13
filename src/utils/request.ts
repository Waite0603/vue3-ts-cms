import axio from 'axios'
import { baseURL_dev } from '../config/baseURL'

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

// 响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    const res = response.data
    if (res.code !== 200) {
      // 401: token 过期
      // if (res.code === 401) {
      //   userStore.clearUser()
      //   ElMessage.success('退出登录成功')
      //   router.push('/login')
      // }
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
