import { $get, $post } from '../utils/request'

// 获取角色列表
export const getRoleList = async (page = 1, pageSize = 5) => {
  const res = await $get(`/my/roleList?page=${page}&pageSize=${pageSize}`)
  return res.data
}

// 添加角色
export const roleAdd = async (data: object) => {
  const res = await $post('/my/addRole', data)
  return res.data
}

// 更新角色信息
export const roleUpdate = async (data: object) => {
  const res = await $post('/my/updateRole', data)
  return res.data
}

// 删除角色
export const roleDelete = async (roleId: number) => {
  const res = await $get(`/my/deleteRole?roleId=${roleId}`)
  return res
}
