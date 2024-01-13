import { $get } from '../utils/request'

export const getRoomType = async (page = 1, pageSize = 5) => {
  const res = await $get(`/room/getRoomType?page=${page}&pageSize=${pageSize}`)
  return res.data
}
