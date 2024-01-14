<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-header pb-0">
            <div class="row">
              <div class="col-lg-6 col-6">
                <h6>RoomType table</h6>
              </div>
              <div class="col-6 text-end">
                <a class="btn bg-gradient-dark mb-0" href="javascript:;" @click="addRole"
                  ><i class="fas fa-plus" aria-hidden="true"></i>添加</a
                >
              </div>
            </div>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center justify-content-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                      编号
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">房间名字</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">床位</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">价格</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
                      余量
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">描述</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="roomType in roomTypeList" :key="roomType.roomTypeId">
                    <td class="text-center">
                      <h6 class="mb-0 text-sm">{{ roomType.roomTypeId }}</h6>
                    </td>
                    <td>
                      <h6 class="mb-0 text-sm">{{ roomType.roomTypeName }}</h6>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">{{ roomType.bedNum }}床</p>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">${{ roomType.roomTypePrice }}</p>
                    </td>
                    <td class="align-middle text-center">
                      <div class="d-flex align-items-center justify-content-center">
                        <span class="me-2 text-xs font-weight-bold">80%</span>
                        <div>
                          <div class="progress">
                            <div
                              class="progress-bar bg-gradient-info"
                              role="progressbar"
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="80"
                              style="width: 80%"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="text-xs font-weight-bold">{{ roomType.typeDescription }}</span>
                    </td>
                    <td class="align-middle">
                      <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                          <el-icon class="el-icon--right"><arrow-down /></el-icon>
                        </span>
                        <template #dropdown>
                          <el-dropdown-menu>
                            <el-dropdown-item @click="handleEditRole()">编辑</el-dropdown-item>
                            <el-dropdown-item @click="handleDelRole(roomType)">删除</el-dropdown-item>
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
  <EditRoom ref="AddorEditRef" @success="loadUser"></EditRoom>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'
import { getRoomType, delRoomType } from '../../api/roomType'
import EditRoom from '../../components/room/EditRoom.vue'
import { ElMessage, ElMessageBox } from 'element-plus'

// 定义 roomType 类型
interface RoomType {
  roomTypeId: number
  roomTypeName: string
  bedNum: number
  roomTypePrice: number
  typeDescription: string
}

const roomTypeList: Ref<RoomType[]> = ref([])
let AddorEditRef = ref()

// 添加房间类型
const addRole = () => {
  AddorEditRef.value.open({})
}

// 编辑房间类型
const handleEditRole = () => {
  ElMessage.warning('暂未开放')
}

// 删除房间类型
const handleDelRole = (roomType: RoomType) => {
  ElMessageBox.confirm('你确定要删除该角色嘛', 'Warning', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      let res = await delRoomType(roomType.roomTypeId)
      if (res.code == 200) {
        ElMessage.success('删除成功')
        loadUser()
      } else {
        ElMessage.error(res.msg)
      }
    })
    .catch(() => {
      ElMessage.info('已取消删除')
    })
}

const loadUser = async () => {
  let res = await getRoomType(1, 100)
  roomTypeList.value = res
}
onMounted(() => {
  loadUser()
})
</script>
