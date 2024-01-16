<template>
  <asideView> </asideView>
  <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg">
    <router-view> </router-view>
    <footerView> </footerView>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

import asideView from './layout/asideView.vue'
import footerView from './layout/footerView.vue'

const userStore = useUserStore()
const router = useRouter()

onMounted(() => {
  if (!userStore.userData.username) {
    ElMessage.warning('请先登录')
    router.push('/login')
  }
})
</script>
