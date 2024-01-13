<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watchEffect } from 'vue'

const isMobile = ref(false)

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 1200
  if (isMobile.value) {
    document.getElementById('sidenav-main')?.classList.add('d-none')
    document.getElementById('btn-show-sidebar')?.classList.remove('d-none')
  } else {
    document.getElementById('sidenav-main')?.classList.remove('d-none')
    document.getElementById('sidenav-main')?.classList.remove('bg-white')
    document.getElementById('sidenav-main')?.classList.add('fixed-start')
    document.getElementById('btn-show-sidebar')?.classList.add('d-none')
  }
}

watchEffect(updateIsMobile)

onMounted(() => {
  window.addEventListener('resize', updateIsMobile)
})

onMounted(() => {
  setTimeout(() => {
    updateIsMobile()
  }, 200)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
})
</script>
