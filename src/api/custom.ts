import { $get } from '../utils/request'

export const getGuestList = async (page = 1, pageSize = 10, resideStateId = 0, guestName = 0) => {
  const res = await $get(
    `/guest/getGuestList?page=${page}&pageSize=${pageSize}&resideStateId=${resideStateId}&guestName=${guestName}`
  )
  return res.data
}
