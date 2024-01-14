<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-header pb-0">
            <div class="row">
              <div class="col-lg-6 col-6">
                <h6>Room table</h6>
                <!-- 导出 -->
                <download-excel
                  class="export-excel-wrapper"
                  :data="json_data"
                  :fields="json_fields"
                  name="订单明细.xlsx"
                >
                  <button type="button" class="btn btn-outline-info btn-sm">下载 Excel</button>
                </download-excel>
              </div>
              <div class="col-6 text-end">
                <el-select v-model="roomStateId.value" class="m-2" placeholder="Select" size="large">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
              </div>
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
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">房间名字</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">床位</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">价格</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">备注</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-3">状态</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="room in roomList" :key="room.roomId">
                    <td class="text-center">
                      <h6 class="mb-0 text-sm">{{ room.roomId }}</h6>
                    </td>
                    <td>
                      <h6 class="mb-0 text-sm">{{ room.roomType.roomTypeName }}</h6>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">{{ room.roomType.bedNum }}床</p>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">${{ room.roomType.roomTypePrice }}</p>
                    </td>
                    <td>
                      <span class="text-xs font-weight-bold">{{ room.description }}</span>
                    </td>
                    <td class="align-middle text-sm">
                      <span
                        class="badge badge-sm"
                        :class="room.roomStateId === 1 ? 'bg-gradient-success' : 'bg-gradient-warning'"
                        >{{ room.roomStateId === 1 ? '空闲' : '入住' }}</span
                      >
                    </td>
                    <td class="align-middle">
                      <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                          <el-icon class="el-icon--right"><arrow-down /></el-icon>
                        </span>
                        <template #dropdown>
                          <el-dropdown-menu>
                            <el-dropdown-item @click="handleOpen(room)">详情</el-dropdown-item>
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
import { ref, Ref, onMounted, watch, reactive } from 'vue'
import { getRoomList } from '../../api/room'

interface RoomType {
  roomTypeId: number
  roomTypeName: string
  bedNum: number
  roomTypePrice: number
  typeDescription: string
}

interface Room {
  description: string
  roomId: number
  roomState: {
    roomStateId: number
    roomStateName: string
  }
  roomStateId: number
  roomType: RoomType
  roomTypeId: number
}

const roomList: Ref<Room[]> = ref([])
// 查询状态, 这里使用 api 切换,当然在实际开发中为了性能考虑, 可以一次性获取所有状态, 然后在前端进行过滤
const roomStateId = reactive({
  value: 0,
  label: '全部'
})
const options = [
  {
    value: 0,
    label: '全部'
  },
  {
    value: 1,
    label: '空闲'
  },
  {
    value: 2,
    label: '入住'
  }
]
let json_data: Room[] = []
const json_fields = {
  订单号: 'roomId',
  房间名字: 'roomType.roomTypeName',
  床位: 'roomType.bedNum',
  价格: 'roomType.roomTypePrice',
  备注: 'description',
  状态: 'roomState.roomStateName'
}

const handleOpen = (room: Room) => {
  console.log(room)
}

watch(
  () => roomStateId.value,
  () => {
    loadUser()
  }
)

const loadUser = async () => {
  let res = await getRoomList(1, 100, roomStateId.value, 0)
  if (res.code == 200) {
    roomList.value = res.data
    json_data = res.data
    console.log(json_data)
  }
}

onMounted(() => {
  loadUser()
})
</script>
