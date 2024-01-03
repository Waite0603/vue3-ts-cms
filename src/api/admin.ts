import { $post } from '../utils/request'

export const $Login = (params: object) => {
  const res = $post('/admin/login', params)
  console.log(res)
}
