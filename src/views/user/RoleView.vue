<template>
  <navbarView position="账户管理" details="角色管理"> </navbarView>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-header pb-0 p-3">
            <div class="row">
              <div class="col-6 d-flex align-items-center">
                <h6 class="mb-0">Authors table</h6>
              </div>
              <div class="col-6 text-end">
                <a class="btn bg-gradient-dark mb-0" href="javascript:;" @click="handleAddRole()"
                  ><i class="fas fa-plus" aria-hidden="true"></i>添加角色</a
                >
              </div>
            </div>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-center text-xxs font-weight-bolder opacity-7">Id</th>
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
                    <td class="align-middle text-center">
                      {{ role.roleId }}
                    </td>
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
                        @click="handleEditRole(role)"
                      >
                        <el-icon><Edit /></el-icon>
                        Edit
                      </a>
                      <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs ms-1 text-danger"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                        @click="handleDeleteRole(role.roleId)"
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

    <EditRole ref="editRef" @sync-list="loadRoles()"></EditRole>
  </div>
</template>

<script setup lang="ts">
import { getRoleList, roleDelete } from '../../api/role'
import { ref, Ref, onMounted } from 'vue'
import EditRole from '../../components/user/EditRole.vue'
import { ElMessageBox, ElMessage } from 'element-plus'

interface Role {
  roleId: number
  roleName: string
}

// 添加角色
// 定义编辑组件 ref 对象
let editRef = ref()
let roleList: Ref<Role[]> = ref([])

// 加载角色列表
const loadRoles = async () => {
  const res = await getRoleList(1, 100)
  roleList.value = res
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

// 添加角色
const handleAddRole = () => {
  editRef.value.formData = {
    roleId: null,
    roleName: ''
  }
  editRef.value.dialogVisible = true
}
// 编辑角色
const handleEditRole = (role: Role) => {
  editRef.value.formData = role
  // 深拷贝
  editRef.value.roleDataBackup = JSON.parse(JSON.stringify(role))
  editRef.value.dialogVisible = true
}

// 删除角色
const handleDeleteRole = (roleId: number) => {
  ElMessageBox.confirm('你确定要删除该角色嘛', 'Warning', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      let res = await roleDelete(roleId)
      console.log(res)
      if (res.code == 200) {
        ElMessage.success('删除成功')
        loadRoles()
      } else {
        ElMessage.error(res.msg)
      }
    })
    .catch(() => {
      ElMessage.info('已取消删除')
    })
}
</script>
