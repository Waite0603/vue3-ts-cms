<template>
  <el-dialog
    title="添加房型"
    v-model="dialog"
    @close="closeDr()"
    class="col-lg-4 col-md-4 mb-md-0 mb-4 card text-center"
  >
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" min-width="120px">
      <el-form-item prop="roomTypeName">
        <label>名称</label>
        <el-input v-model="ruleForm.roomTypeName" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <label>描述</label>
        <div style="border: 1px solid #ccc" class="m-1">
          <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            mode="default"
          />
          <Editor
            style="height: 400px; overflow-y: hidden"
            v-model="ruleForm.typeDescription"
            :defaultConfig="editorConfig"
            mode="default"
            @onCreated="handleCreated"
          />
        </div>
      </el-form-item>
      <el-form-item prop="roomTypePrice">
        <label>价格</label>
        <el-input v-model="ruleForm.roomTypePrice" autocomplete="off" />
      </el-form-item>
      <el-form-item prop="bedNum">
        <label>床位</label>
        <el-input v-model="ruleForm.bedNum" autocomplete="off" />
      </el-form-item>
      <span class="row flex" style="justify-content: center">
        <el-button type="primary" @click="submitForm(ruleFormRef)" class="col-5">添加</el-button>
        <el-button @click="resetForm()" class="col-5">取消</el-button>
      </span>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineExpose } from 'vue'
import { onBeforeUnmount, shallowRef } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { addRoomType, editRoomType } from '../../api/roomType'
import { ElMessage } from 'element-plus'

import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const dialog = ref(false)

const ruleFormRef = ref<FormInstance>()
const ruleForm = ref({
  roomTypeId: null,
  roomTypeName: '',
  roomTypePrice: '',
  bedNum: '',
  typeDescription: ''
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validRoomTypeName = (_: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('房型名称不能为空'))
  } else {
    callback()
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validRoomTypePrice = (_: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('房型价格不能为空'))
  } else if (!/^\d+(\.\d+)?$/.test(value)) {
    callback(new Error('只能输入数字且不能是负数'))
  } else {
    callback()
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validRoomTypeBedNum = (_: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('床位数量不能为空'))
  } else if (!/^\d+(\.\d+)?$/.test(value)) {
    callback(new Error('只能输入数字且不能是负数'))
  } else {
    callback()
  }
}
// 验证对象
const rules = ref<FormRules<typeof ruleForm>>({
  roomTypeName: [{ validator: validRoomTypeName, trigger: 'blur' }],
  roomTypePrice: [{ validator: validRoomTypePrice, trigger: 'blur' }],
  bedNum: [{ validator: validRoomTypeBedNum, trigger: 'blur' }]
})
const eimt = defineEmits(['success'])
// 提交
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      if (ruleForm.value.roomTypeId) {
        await editRoomType(ruleForm.value).then(() => {
          dialog.value = false
          ElMessage.success('编辑成功')
          eimt('success', 'edit')
        })
      } else {
        // 新增
        await addRoomType(ruleForm.value).then(() => {
          dialog.value = false
          ElMessage.success('新增成功')
          eimt('success', 'add')
        })
      }
    } else {
      return false
    }
  })
}
//  取消
const resetForm = () => {
  dialog.value = false
}
// 抽屉关闭时的回调
const closeDr = () => {
  dialog.value = false
  ruleForm.value = {
    roomTypeId: null,
    roomTypeName: '',
    roomTypePrice: '',
    bedNum: '',
    typeDescription: ''
  }
}
// 抽屉打开时的回调
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const open = (obj: any) => {
  dialog.value = true
  if (obj.roomTypeId) {
    ruleForm.value = obj
  }
}

const editorRef = shallowRef()

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
// 将状态暴露出去
defineExpose({
  open
})
</script>
