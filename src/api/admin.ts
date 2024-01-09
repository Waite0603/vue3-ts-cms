import { $get, $post } from '../utils/request'
import { ElMessage } from 'element-plus'
// import { md5 } from 'md5js'

interface LoginParams {
  username: string
  password: string
}

export const Login = async (params: LoginParams) => {
  // md5加密
  // params.password = md5(params.password, 32)
  const res = await $post('/api/login', params)
  const data = res.data
  if (data.code === 200) {
    // 登录成功，将token存入sessionStorage
    // 在关闭浏览器后，sessionStorage中的数据会被清除
    localStorage.setItem('token', data.token)
    ElMessage.success('登录成功')

    // 返回true，表示登录成功, 用于路由守卫切换路由
    return true
  } else {
    ElMessage.error(data.msg)
  }

  return false
}

// 获取账户信息
export const GetUserInfo = async (username: string) => {
  const res = await $get(`/my/getUserInfo?username=${username}`)
  return res.data
}

// 获取用户列表
export const getUserList = async (page = 1, pageSize = 5, roleId = 0) => {
  const res = await $get(`/my/userList?page=${page}&pageSize=${pageSize}&roleId=${roleId}`)
  return res.data
}

// 修改用户信息
export const userUpdate = async (data: object) => {
  const res = await $post('/my/editUser', data)
  return res.data
}

// 删除用户
export const delUser = (id: number) => {
  return $get(`/my/deleteUser?id=${id}`)
}
