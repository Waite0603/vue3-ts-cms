<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <!-- Navbar -->
        <nav
          class="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4"
        >
          <div class="container-fluid">
            <a class="navbar-brand font-weight-bolder ms-lg-0 ms-3" href="../pages/dashboard.html"> CMS </a>
            <button
              class="navbar-toggler shadow-none ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
            <div>
              <ul class="navbar-nav mx-auto"></ul>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/product/soft-ui-dashboard"
                    class="btn btn-sm btn-round mb-0 me-1 bg-gradient-info"
                    >注册</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- End Navbar -->
      </div>
    </div>
  </div>
  <main class="main-content mt-0">
    <section>
      <div class="page-header min-vh-85">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
              <div class="card card-plain mt-8">
                <div class="card-header pb-0 text-left bg-transparent">
                  <h3 class="font-weight-bolder text-info text-gradient">Welcome back</h3>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <el-form ref="ruleFormRef" :model="loginFrom" :rules="rules" label-position="top">
                    <el-form-item prop="username" rule="username">
                      <label>Username</label>
                      <el-input v-model="loginFrom.username" placeholder="Username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                      <label>Username</label>
                      <el-input
                        v-model="loginFrom.password"
                        type="password"
                        placeholder="Password"
                        @keyup.enter="onSubmit(ruleFormRef)"
                      ></el-input>
                    </el-form-item>
                    <div class="form-check form-switch ps-0">
                      <input class="form-check-input ms-auto" type="checkbox" v-model="loginFrom.rememberMe" /><label
                        class="form-check-label text-body ms-2 text-truncate w-80 mb-0"
                        for="flexSwitchCheckDefault"
                        >记住账户和密码</label
                      >
                    </div>
                    <div class="text-center">
                      <button type="button" class="btn bg-gradient-info w-100 mt-4 mb-0" @click="onSubmit(ruleFormRef)">
                        Sign in
                      </button>
                    </div>
                  </el-form>
                  <div class="card-footer text-center pt-0 px-lg-2 px-1">
                    <p class="mb-4 text-sm mx-auto">
                      Don't have an account?
                      <a href="javascript:;" class="text-info text-gradient font-weight-bold">Sign up</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                <div
                  class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                  :style="{
                    background: 'linear-gradient(to right, #9fe1fa, #f4edc9)'
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- -------- START FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- -->
  <footer class="footer py-5">
    <div class="container">
      <div class="row">
        <div class="col-8 mx-auto text-center mt-1">
          <p class="mb-0 text-secondary">Copyright © 2024 by Waite Wang.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { useRouter } from 'vue-router'

import { Login, GetUserInfo } from '@/api/admin'

// 导入 user 全局状态
import { useUserStore } from '../store/user'
const userStore = useUserStore()

// ruleFormRef 作用是获取表单实例
const ruleFormRef = ref<FormInstance>()
const router = useRouter()

const loginFrom = reactive({
  username: '',
  password: '',
  rememberMe: false
})

const rules = reactive<FormRules<typeof loginFrom>>({
  username: [{ required: true, message: 'Please input username', trigger: 'blur' }],
  password: [{ required: true, message: 'Please input password', trigger: 'blur' }]
})

// 检查 localStorage 中是否有记住密码的信息
const checkRememberMe = () => {
  const rememberMe = localStorage.getItem('rememberMe')
  if (rememberMe) {
    const rememberMeObj = JSON.parse(rememberMe)
    loginFrom.username = rememberMeObj.username
    loginFrom.password = rememberMeObj.password
    loginFrom.rememberMe = rememberMeObj.rememberMe
  }
}

const onSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      // 请求登录接口
      // 异步为了等待接口返回数据
      const res = await Login(loginFrom)
      if (res) {
        // $GetUserInfo(loginFrom.username)
        const userInfo = await GetUserInfo(loginFrom.username)
        // 如果记住密码，将登录信息存储到 localStorage 中
        if (loginFrom.rememberMe) {
          localStorage.setItem('rememberMe', JSON.stringify(loginFrom))
        }
        // 如果没有记住密码，清除 localStorage 中的登录信息
        else {
          localStorage.removeItem('rememberMe')
        }
        userStore.setUser(userInfo)
        // 登录成功后跳转到首页
        router.push({ path: '/index' })
      }
    } else {
      console.log('error submit!')
      return false
    }
  })
}

// 如果 pinia 中cun有 user 信息，说明已经登录过了，直接跳转到首页
onMounted(() => {
  checkRememberMe()
  if (userStore.userData.username) {
    ElMessage.success('您已经登录过了')
    router.push({ path: '/index' })
  }
})
</script>
