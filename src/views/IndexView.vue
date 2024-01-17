<template>
  <asideView> </asideView>
  <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg">
    <router-view> </router-view>
    <footerView> </footerView>
  </main>
</template>

<script setup lang="ts">
import asideView from './layout/asideView.vue'
import footerView from './layout/footerView.vue'
</script>
