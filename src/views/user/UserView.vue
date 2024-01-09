<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-header pb-0 p-3"></div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-center text-xxs font-weight-bolder opacity-7">Id</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Username</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Password</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Phone</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Function</th>
                    <th class="text-secondary opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in userList" :key="user.roleId">
                    <td class="align-middle text-center">
                      {{ user.id }}
                    </td>
                    <td>
                      <div class="d-flex px-3 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ user.username }}</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex py-1">
                        <div>
                          <img :src="user.userPic" class="avatar avatar-sm me-3" alt="user1" />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ user.name }}</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-3 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ user.password }}</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ user.phone }}</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-3 py-1">
                        <p class="text-xs font-weight-bold mb-0">{{ user.role.roleName }}</p>
                      </div>
                    </td>
                    <td class="align-middle text-center">
                      <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                        @click="editUserImg(user)"
                      >
                        <el-icon><Edit /></el-icon>
                        Edit
                      </a>
                      <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs ms-1 text-danger"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                        @click="handleDeleteRole(user.id)"
                      >
                        <el-icon><DeleteFilled /></el-icon>
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer pt-3">
      <div class="container-fluid">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-lg-6 mb-lg-0 mb-4">
            <div class="copyright text-center text-sm text-muted text-lg-start">
              ©made with <i class="fa fa-heart" aria-hidden="true"></i> by
              <a href="https://www.creative-tim.com" class="font-weight-bold" target="_blank">Creative Tim</a>
              for a better web.
            </div>
          </div>
          <div class="col-lg-6">
            <ul class="nav nav-footer justify-content-center justify-content-lg-end">
              <li class="nav-item">
                <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank">Creative Tim</a>
              </li>
              <li class="nav-item">
                <a href="https://www.creative-tim.com/presentation" class="nav-link text-muted" target="_blank"
                  >About Us</a
                >
              </li>
              <li class="nav-item">
                <a href="https://creative-tim.com/blog" class="nav-link text-muted" target="_blank">Blog</a>
              </li>
              <li class="nav-item">
                <a href="https://www.creative-tim.com/license" class="nav-link pe-0 text-muted" target="_blank"
                  >License</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <UploadImg ref="editRef" @sync-list="loadUser()"></UploadImg>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

import { getUserList, delUser } from '../../api/admin'
import UploadImg from '../../components/user/UploadImg.vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userList: any = ref([])
const loadUser = async () => {
  let res = await getUserList(1, 100, 0)
  userList.value = res
}
onMounted(() => {
  loadUser()
})

// 修改用户图片
let editRef = ref()
const editUserImg = (user: object) => {
  editRef.value.dialogVisible = true
  editRef.value.userData = user
}

// 删除用户
// 删除角色
const handleDeleteRole = (id: number) => {
  ElMessageBox.confirm('你确定要删除该角色嘛', 'Warning', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      let res = await delUser(id)
      console.log(res)
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
</script>
