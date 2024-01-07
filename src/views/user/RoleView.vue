<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-header pb-0">
            <h6>Authors table</h6>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Status
                    </th>
                    <th class="text-secondary opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="role in roleList" :key="role.roleId">
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img :src="randomImg()" class="avatar avatar-sm me-3" alt="user1" />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ role.roleName }}</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">Manager</p>
                      <p class="text-xs text-secondary mb-0">Organization</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-success">Online</span>
                    </td>
                    <td class="align-middle text-center">
                      <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        <el-icon><Edit /></el-icon>
                        Edit
                      </a>
                      <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs ms-1 text-danger"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
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
  </div>
</template>

<script setup lang="ts">
import { getRoleList } from '../../api/role'
import { ref, Ref, onMounted } from 'vue'

interface Role {
  roleId: number
  roleName: string
}

let roleList: Ref<Role[]> = ref([])

// 加载角色列表
const loadRoles = async () => {
  const res = await getRoleList(1, 100)
  roleList.value = res
  console.log(roleList.value)
}

onMounted(() => {
  loadRoles()
})

// 随机获取头像图片
const imgList = [
  require('../../assets/img/team-1.jpg'),
  require('../../assets/img/team-2.jpg'),
  require('../../assets/img/team-3.jpg'),
  require('../../assets/img/team-4.jpg')
]
const randomImg = () => {
  return imgList[Math.floor(Math.random() * imgList.length)]
}
</script>
