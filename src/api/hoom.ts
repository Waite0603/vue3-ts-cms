import { $get } from '../utils/request'

// /room/hotelSaleInfo
export const getHotelSaleInfo = async () => {
  const res = await $get(`/room/hotelSaleInfo`)
  return res.data
}
