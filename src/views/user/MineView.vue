<template>
  <div class="pt-6 pb-2">
    <div class="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden">
      <div class="row gx-4">
        <div class="col-auto">
          <div>
            <img :src="userData.userPic" alt="profile_image" class="avatar avatar-xl position-relative" />
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">{{ userData.username }}</h5>
            <p class="mb-0 font-weight-bold text-sm">{{ userData.name }} / {{ userData.phone }}</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
          <div class="nav-wrapper position-relative end-0">
            <ul class="nav nav-pills nav-fill p-1 bg-transparent" role="tablist">
              <li class="nav-item text-end">
                <a class="mb-0 px-0 py-1" href="javascript:;" @click="handleEditPwd()">
                  <svg
                    class="text-dark"
                    width="16px"
                    height="16px"
                    viewBox="0 0 40 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>settings</title>
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fill-rule="nonzero">
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(304.000000, 151.000000)">
                            <polygon
                              class="color-background"
                              opacity="0.596981957"
                              points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                            ></polygon>
                            <path
                              class="color-background"
                              d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                              opacity="0.596981957"
                            ></path>
                            <path
                              class="color-background"
                              d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span class="ms-1">修改密码</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid py-2">
    <div class="row">
      <div class="col-12 col-xl-6">
        <div class="card h-100">
          <div class="card-header pb-0 p-3">
            <h6 class="mb-0">Platform Settings</h6>
          </div>
          <div class="card-body p-3">
            <h6 class="text-uppercase text-body text-xs font-weight-bolder">Account</h6>
            <ul class="list-group">
              <li class="list-group-item border-0 px-0">
                <div class="form-check form-switch ps-0">
                  <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault" />
                  <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault"
                    >Email me when someone follows me</label
                  >
                </div>
              </li>
              <li class="list-group-item border-0 px-0">
                <div class="form-check form-switch ps-0">
                  <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1" />
                  <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault1"
                    >Email me when someone answers on my post</label
                  >
                </div>
              </li>
              <li class="list-group-item border-0 px-0">
                <div class="form-check form-switch ps-0">
                  <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" />
                  <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault2"
                    >Email me when someone mentions me</label
                  >
                </div>
              </li>
            </ul>
            <h6 class="text-uppercase text-body text-xs font-weight-bolder mt-4">Application</h6>
            <ul class="list-group">
              <li class="list-group-item border-0 px-0">
                <div class="form-check form-switch ps-0">
                  <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault3" />
                  <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault3"
                    >New launches and projects</label
                  >
                </div>
              </li>
              <li class="list-group-item border-0 px-0">
                <div class="form-check form-switch ps-0">
                  <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault4" />
                  <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault4"
                    >Monthly product updates</label
                  >
                </div>
              </li>
              <li class="list-group-item border-0 px-0 pb-0">
                <div class="form-check form-switch ps-0">
                  <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault5" />
                  <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault5"
                    >Subscribe to newsletter</label
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-6">
        <div class="card h-100">
          <div class="card-header pb-0 p-3">
            <div class="row">
              <div class="col-md-8 d-flex align-items-center">
                <h6 class="mb-0">Profile Information</h6>
              </div>
            </div>
          </div>
          <div class="card-body p-3">
            <p class="text-sm">
              Hi, Welcome to the Vue3-TS-CMS Admin Dashboard! Here you can manage your profile information.
            </p>
            <hr class="horizontal gray-light my-3" />
            <ul class="list-group">
              <li class="list-group-item border-0 ps-0 pt-0 text-sm">
                <strong class="text-dark">Id:</strong> &nbsp; {{ userData.id }}
              </li>
              <li class="list-group-item border-0 ps-0 text-sm">
                <strong class="text-dark">RoleId:</strong> &nbsp; {{ userData.roleId }}
              </li>
              <li class="list-group-item border-0 ps-0 text-sm">
                <strong class="text-dark">UserImg:</strong> &nbsp; {{ userData.userPic }}
              </li>
              <li class="list-group-item border-0 ps-0 text-sm">
                <strong class="text-dark">Name:</strong> &nbsp; {{ userData.name }}
              </li>
              <li class="list-group-item border-0 ps-0 text-sm">
                <strong class="text-dark">Username:</strong> &nbsp; {{ userData.username }}
              </li>
              <li class="list-group-item border-0 ps-0 text-sm">
                <strong class="text-dark">Password:</strong> &nbsp; **********
              </li>
              <li class="list-group-item border-0 ps-0 pb-0">
                <strong class="text-dark text-sm">Social:</strong> &nbsp;
                <a class="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                  <el-icon><ChatRound /></el-icon>
                </a>
                <a class="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                  <el-icon><ChatLineRound /></el-icon>
                </a>
                <a class="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                  <el-icon><Message /></el-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12 mt-4">
        <div class="card mb-4">
          <div class="card-header pb-0 p-3">
            <h6 class="mb-1">Projects</h6>
            <p class="text-sm">Architects design houses</p>
          </div>
          <div class="card-body p-3">
            <div class="row">
              <div class="col-xl-6 col-md-12 mb-xl-0 mb-8">
                <div class="card card-blog card-plain">
                  <div class="position-relative">
                    <a class="d-block shadow-xl border-radius-xl">
                      <img
                        src="../../assets/img/home-decor-1.jpg"
                        alt="img-blur-shadow"
                        class="img-fluid shadow border-radius-xl"
                      />
                    </a>
                  </div>
                  <div class="card-body px-1 pb-0">
                    <p class="text-gradient text-dark mb-2 text-sm">Project #2</p>
                    <a href="javascript:;">
                      <h5>Modern</h5>
                    </a>
                    <p class="mb-4 text-sm">As Uber works through a huge amount of internal management turmoil.</p>
                    <div class="d-flex align-items-center justify-content-between">
                      <button type="button" class="btn btn-outline-primary btn-sm mb-0">View Project</button>
                      <div class="avatar-group mt-2">
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title=""
                          data-bs-original-title="Elena Morison"
                        >
                          <img alt="Image placeholder" src="../../assets/img/team-1.jpg" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title=""
                          data-bs-original-title="Ryan Milly"
                        >
                          <img alt="Image placeholder" src="../../assets/img/team-2.jpg" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title=""
                          data-bs-original-title="Nick Daniel"
                        >
                          <img alt="Image placeholder" src="../../assets/img/team-3.jpg" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title=""
                          data-bs-original-title="Peterson"
                        >
                          <img alt="Image placeholder" src="../../assets/img/team-4.jpg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-md-12 mb-xl-0 mb-8">
                <div class="card card-blog card-plain">
                  <div class="position-relative">
                    <a class="d-block shadow-xl border-radius-xl">
                      <img
                        src="../../assets/img/home-decor-2.jpg"
                        alt="img-blur-shadow"
                        class="img-fluid shadow border-radius-lg"
                      />
                    </a>
                  </div>
                  <div class="card-body px-1 pb-0">
                    <p class="text-gradient text-dark mb-2 text-sm">Project #1</p>
                    <a href="javascript:;">
                      <h5>Scandinavian</h5>
                    </a>
                    <p class="mb-4 text-sm">
                      Music is something that every person has his or her own specific opinion about.
                    </p>
                    <div class="d-flex align-items-center justify-content-between">
                      <button type="button" class="btn btn-outline-primary btn-sm mb-0">View Project</button>
                      <div class="avatar-group mt-2">
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title=""
                          data-bs-original-title="Nick Daniel"
                        >
                          <img alt="Image placeholder" src="../../assets/img/team-3.jpg" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title=""
                          data-bs-original-title="Peterson"
                        >
                          <img alt="Image placeholder" src="../../assets/img/team-4.jpg" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title=""
                          data-bs-original-title="Elena Morison"
                        >
                          <img alt="Image placeholder" src="../../assets/img/team-1.jpg" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title=""
                          data-bs-original-title="Ryan Milly"
                        >
                          <img alt="Image placeholder" src="../../assets/img/team-2.jpg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              ©2024, made with <i class="fa fa-heart" aria-hidden="true"></i> by
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
  <EditPwd ref="editPwdRef" :user-data="userData"></EditPwd>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'
import { useUserStore } from '../../store/user'
import { GetUserInfo } from '../../api/admin'
import EditPwd from '../../components/user/EditPwd.vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let userData: Ref<any> = ref({})
const userStore = useUserStore()

const loadUserInfo = async () => {
  let res = await GetUserInfo(userStore.userData.username)
  userData.value = res
}

// 修改密码
let editPwdRef = ref()
const handleEditPwd = () => {
  editPwdRef.value.dialogVisible = true
  editPwdRef.value.userData = userData.value
}

onMounted(() => {
  loadUserInfo()
})
</script>
