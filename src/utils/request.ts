import axio from 'axios'
import { baseURL_dev } from '../config/baseURL'

// 初始化 axios 对象
const service = axio.create({
  baseURL: baseURL_dev,
  timeout: 3000
})

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
