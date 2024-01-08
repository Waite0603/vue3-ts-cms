<template>
  <el-dialog
    :title="formData.roleId ? '编辑角色' : '新增角色'"
    v-model="dialogVisible"
    class="col-lg-4 col-md-4 mb-md-0 mb-4 card text-center"
    @close="handleCancel"
  >
    <el-form ref="ruleFormRef" :model="formData" :rules="rules" @submit.prevent="onSubmit(ruleFormRef)">
      <el-form-item label="名称" prop="roleName">
        <el-input v-model="formData.roleName"></el-input>
      </el-form-item>
    </el-form>
    <span class="dialog-footer">
      <el-button type="primary" @click="onSubmit(ruleFormRef)">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, Ref, reactive, defineExpose, defineEmits } from 'vue'
import { type FormInstance, type FormRules, ElMessage } from 'element-plus'
import { roleAdd, roleUpdate } from '../../api/role'

const emit = defineEmits(['sync-list'])

const dialogVisible: Ref<boolean> = ref(false)

const ruleFormRef = ref<FormInstance>()
let formData = ref({
  roleId: null,
  roleName: ''
})
let roleDataBackup = ref({
  roleId: null,
  roleName: ''
})
const rules = reactive<FormRules<typeof formData>>({
  roleName: [{ required: true, message: '请输入角色名称', trigger: 'blur' }]
})

const onSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      if (formData.value.roleId) {
        let res = await roleUpdate(formData.value)
        if (res.code == 200) {
          ElMessage.success('修改成功')
          dialogVisible.value = false
          emit('sync-list')
        } else {
          ElMessage.error(res.msg)
        }
      } else {
        let res = await roleAdd(formData.value)
        if (res.code == 200) {
          ElMessage.success('添加成功')
          dialogVisible.value = false
          emit('sync-list')
        } else {
          ElMessage.error(res.msg)
        }
      }
      // 重置表单
      formData.value = {
        roleId: null,
        roleName: ''
      }
    } else {
      console.log('提交失败!')
      return false
    }
  })
}

// 监听取消事件
const handleCancel = () => {
  // 如果是修改，取消后需要重置表单
  if (formData.value.roleId) {
    console.log('取消修改')
    console.log(roleDataBackup.value)
    formData.value.roleName = roleDataBackup.value.roleName
  }
}
// 暴露 dialogVisible
defineExpose({ dialogVisible, formData, roleDataBackup })
</script>
