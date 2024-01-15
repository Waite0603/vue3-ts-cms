<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-header pb-0">
            <div class="row">
              <div class="col-lg-6 col-6">
                <h6>Room table</h6>
              </div>
              <div class="col-6 text-end"></div>
            </div>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center justify-content-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                      订单号
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                      姓名
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7text-center">
                      身份证
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                      电话
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                      房型
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                      入住人数
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                      入住时间
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                      离开时间
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                      押金
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                      状态
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="guest in guestList" :key="guest.guestId">
                    <td class="text-center">
                      <span class="text-xs font-weight-bold">{{ guest.guestId }}</span>
                    </td>
                    <td class="text-center">
                      <span class="text-xs font-weight-bold">{{ guest.guestName }}</span>
                    </td>
                    <td class="text-center">
                      <span class="text-xs font-weight-bold">{{ guest.identityId }}</span>
                    </td>
                    <td class="text-center">
                      <span class="text-xs font-weight-bold">{{ guest.guestNum }}人</span>
                    </td>
                    <td class="text-center">
                      <span class="text-xs font-weight-bold">{{ guest.phone }}</span>
                    </td>
                    <td class="text-center">
                      <span class="text-xs font-weight-bold">{{ guest.room.roomType.roomTypeName }}</span>
                    </td>
                    <td class="text-center">
                      <span class="text-xs font-weight-bold">{{ formatDate(guest.resideDate) }}</span>
                    </td>
                    <td class="text-center">
                      <span class="text-xs font-weight-bold">{{ formatDate(guest.leaveDate) }}</span>
                    </td>
                    <td class="text-center">
                      <span class="text-xs font-weight-bold">${{ guest.deposit }}</span>
                    </td>
                    <td class="align-middle text-sm">
                      <span
                        class="badge badge-sm"
                        :class="guest.resideStateId === 1 ? 'bg-gradient-info' : 'bg-gradient-success'"
                      >
                        {{ guest.resideStateId === 1 ? '未结账' : '已结账' }}</span
                      >
                    </td>
                    <td class="align-middle">
                      <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                          <el-icon class="el-icon--right"><arrow-down /></el-icon>
                        </span>
                        <template #dropdown>
                          <el-dropdown-menu>
                            <el-dropdown-item>详情</el-dropdown-item>
                          </el-dropdown-menu>
                        </template>
                      </el-dropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getGuestList } from '../../api/custom'
import { ref, Ref, onMounted } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const guestList: Ref<any> = ref([])
const loadGuestList = async () => {
  const res = await getGuestList()
  guestList.value = res
  console.log(guestList.value)
}

// 格式化时间
const formatDate = (date: string) => {
  // 如果 date 为空，直接返回空字符串
  if (!date) {
    return ''
  }
  const dateObj = new Date(date)
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() < 10 ? `0${dateObj.getMonth() + 1}` : dateObj.getMonth() + 1
  const day = dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate()
  const hour = dateObj.getHours() < 10 ? `0${dateObj.getHours()}` : dateObj.getHours()
  const minute = dateObj.getMinutes() < 10 ? `0${dateObj.getMinutes()}` : dateObj.getMinutes()
  const second = dateObj.getSeconds() < 10 ? `0${dateObj.getSeconds()}` : dateObj.getSeconds()
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

onMounted(() => {
  loadGuestList()
})
</script>
