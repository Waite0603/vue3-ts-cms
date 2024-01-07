import { $get } from '../utils/request'

// 获取角色列表
export const getRoleList = async (page = 1, pageSize = 5) => {
  const res = await $get(`/my/roleList?page=${page}&pageSize=${pageSize}`)
  return res.data
}
