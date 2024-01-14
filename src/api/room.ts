import { $get } from '../utils/request'

export const getRoomList = async (page = 1, pageSize = 5, roomStateId = 0, roomTypeId = 0) => {
  const res = await $get(
    `/room/getRoomList?page=${page}&pageSize=${pageSize}&roomStateId=${roomStateId}&roomTypeId=${roomTypeId}`
  )
  return res
}
