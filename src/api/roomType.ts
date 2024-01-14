import { $get, $post } from '../utils/request'

export const getRoomType = async (page = 1, pageSize = 5) => {
  const res = await $get(`/room/getRoomType?page=${page}&pageSize=${pageSize}`)
  return res.data
}

// 新增房型
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addRoomType = (data: any) => $post('/room/addRoomType', data)

// 编辑房型
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const editRoomType = (data: any) => $post('/room/editRoomType', data)

// 删除房型
// /room/delRoomType?roomTypeId=1
export const delRoomType = async (roomTypeId: number) => {
  const res = await $get(`/room/delRoomType?roomTypeId=${roomTypeId}`)
  return res
}
