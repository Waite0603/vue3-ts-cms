<template>
  <el-dialog
    title="修改密码"
    v-model="dialogVisible"
    @close="handleCancel"
    class="col-lg-4 col-md-4 mb-md-0 mb-4 card text-center"
  >
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" min-width="120px" class="demo-ruleForm">
      <el-form-item label="密码" prop="pass">
        <el-input v-model="ruleForm.pass" type="password" show-password />
      </el-form-item>
      <el-form-item label="确认" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" type="password" show-password @keyup.enter="submitForm(ruleFormRef)" />
      </el-form-item>
      <span class="row flex" style="justify-content: center">
        <el-button type="primary" @click="submitForm(ruleFormRef)" class="col-5">提交</el-button>
        <el-button @click="resetForm(ruleFormRef)" class="col-5">重置</el-button>
      </span>
    </el-form>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, Ref, defineExpose } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'

import { useUserStore } from '../../store/user'
import { userUpdate } from '../../api/admin'

const userStore = useUserStore()
const router = useRouter()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userData: Ref<any> = ref([])
const dialogVisible: Ref<boolean> = ref(false)

const ruleFormRef = ref<FormInstance>()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else if (value.length < 6) {
    callback(new Error('Password length must be greater than 6'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: ''
})

const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      userData.value.password = ruleForm.pass
      let res = await userUpdate(userData.value)
      if (res.code == 200) {
        ElMessage.success('修改成功, 请重新登录')
        userStore.clearUser()
        router.push('/login')
        dialogVisible.value = false
      } else {
        ElMessage.error(res.msg)
      }
    } else {
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

// 关闭弹窗
const handleCancel = () => {
  // 重置表单
  resetForm(ruleFormRef.value)
}

defineExpose({
  dialogVisible,
  userData
})
</script>
