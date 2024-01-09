<template>
  <el-dialog
    title="上传图片"
    v-model="dialogVisible"
    class="col-lg-4 col-md-4 mb-md-0 mb-4 card text-center"
    @close="handleCancel"
  >
    <el-upload
      class="avatar-uploader mb-4"
      :action="baseURL_dev + '/my/upload'"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :headers="{ Authorization: token }"
      name="image"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
    <span class="dialog-footer">
      <el-button type="primary" @click="onSubmit()">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, Ref, defineExpose, defineEmits } from 'vue'
import { ElMessage } from 'element-plus'
import type { UploadProps } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

import { baseURL_dev } from '../../config/baseURL'
import { userUpdate } from '../../api/admin'

const dialogVisible: Ref<boolean> = ref(false)
const emit = defineEmits(['sync-list'])
const imageUrl = ref('')

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userData: Ref<any> = ref({})
const token = localStorage.getItem('token')

const handleAvatarSuccess: UploadProps['onSuccess'] = (response) => {
  if (response.code == 200) {
    imageUrl.value = baseURL_dev + response.imageUrl
  } else {
    ElMessage.error(response.msg)
    imageUrl.value = ''
  }
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}

const onSubmit = async () => {
  userData.value.userPic = imageUrl.value
  const user = {
    id: userData.value.id,
    username: userData.value.username,
    password: userData.value.password,
    name: userData.value.name,
    roleId: userData.value.roleId,
    userPic: userData.value.userPic,
    phone: userData.value.phone
  }
  const res = await userUpdate(user)
  if (res.code == 200) {
    ElMessage.success('修改成功')
    dialogVisible.value = false
    emit('sync-list')
  } else {
    ElMessage.error(res.msg)
  }
}

const handleCancel = () => {
  imageUrl.value = ''
}

defineExpose({
  dialogVisible,
  userData
})
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  padding: 20px;
  color: #8c939d;
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
