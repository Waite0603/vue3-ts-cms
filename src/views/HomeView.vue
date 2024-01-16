<template>
  <!-- Navbar -->
  <navbarView position="主页" details="后台主页"> </navbarView>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-8">
                <div class="numbers">
                  <p class="text-sm mb-0 text-capitalize font-weight-bold">Today's Money</p>
                  <h5 class="font-weight-bolder mb-0" ref="moneyEl">$53,000</h5>
                </div>
              </div>
              <div class="col-4 text-end">
                <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                  <i class="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-8">
                <div class="numbers">
                  <p class="text-sm mb-0 text-capitalize font-weight-bold">Today's Users</p>
                  <h5 class="font-weight-bolder mb-0" ref="userEl">2,300</h5>
                </div>
              </div>
              <div class="col-4 text-end">
                <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                  <i class="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-8">
                <div class="numbers">
                  <p class="text-sm mb-0 text-capitalize font-weight-bold">New Clients</p>
                  <h5 class="font-weight-bolder mb-0" ref="clientEl">+3,462</h5>
                </div>
              </div>
              <div class="col-4 text-end">
                <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                  <i class="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6">
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-8">
                <div class="numbers">
                  <p class="text-sm mb-0 text-capitalize font-weight-bold">Sales</p>
                  <h5 class="font-weight-bolder mb-0" ref="saleEl">$103,430</h5>
                </div>
              </div>
              <div class="col-4 text-end">
                <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                  <i class="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-7 mb-lg-0 mb-4">
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-lg-6">
                <div class="d-flex flex-column h-100">
                  <p class="mb-1 pt-2 text-bold">Built by developers</p>
                  <h5 class="font-weight-bolder">Vue3 TS CMS</h5>
                  <p class="mb-5">
                    CMS based on Vue3 TS Element Plus, use the newest vue3 composition api, type script, and element
                  </p>
                  <a class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                    Read More
                    <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                <div class="bg-gradient-primary border-radius-lg h-100">
                  <img
                    src="../assets/img/shapes/waves-white.svg"
                    class="position-absolute h-100 w-50 top-0 d-lg-block d-none"
                    alt="waves"
                  />
                  <div class="position-relative d-flex align-items-center justify-content-center h-100">
                    <img
                      class="w-100 position-relative z-index-2 pt-4"
                      src="../assets/img/illustrations/rocket-white.png"
                      alt="rocket"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="card h-100 p-3">
          <div
            class="overflow-hidden position-relative border-radius-lg bg-cover h-100"
            :style="{ backgroundImage: `url(${require('../assets/img/ivancik.jpg')})` }"
          >
            <span class="mask bg-gradient-dark"></span>
            <div class="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
              <h5 class="text-white font-weight-bolder mb-4 pt-2">About us</h5>
              <p class="text-white">
                We are a young company always looking for new and creative ideas to help you with our products in your
                everyday work.
              </p>
              <a class="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                Read More
                <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-5 mb-lg-0 mb-4">
        <div class="card h-100 mb-4">
          <div class="card-header pb-0 px-3">
            <div class="row">
              <div class="col-md-6">
                <h6 class="mb-0">Your Transaction's</h6>
              </div>
            </div>
          </div>
          <div class="card-body pt-4 p-3">
            <ul class="list-group" v-for="guest in guestList" :key="guest.guestId">
              <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                <div class="d-flex align-items-center">
                  <button
                    class="btn btn-icon-only btn-rounded mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"
                    :class="guest.resideStateId === 2 ? 'btn-outline-success' : 'btn-outline-danger'"
                  >
                    <el-icon v-if="guest.resideStateId === 2"><Select /></el-icon>
                    <el-icon v-else><Close /></el-icon>
                  </button>
                  <div class="d-flex flex-column">
                    <h6 class="mb-1 text-dark text-sm">
                      {{ guest.room.roomType.roomTypeName }}
                      <span class="text-xs"> {{ guest.guestName }}</span>
                    </h6>
                    <span class="text-xs">{{ formatDate(guest.resideDate) }}</span>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center text-gradient text-sm font-weight-bold"
                  :class="guest.resideStateId === 2 ? 'text-success' : 'text-danger'"
                >
                  <span class="text-xs font-weight-bold me-2">{{ guest.resideStateId === 2 ? '+' : '-' }}</span>
                  ${{ guest.room.roomType.roomTypePrice }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <div class="card z-index-2">
          <div class="card-header pb-0">
            <h6>Sales overview</h6>
          </div>
          <div class="card-body p-3">
            <div class="chart w-100">
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-4">
      <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
        <div class="card">
          <div class="card-header pb-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6>Projects</h6>
                <p class="text-sm mb-0">
                  <i class="fa fa-check text-info" aria-hidden="true"></i>
                  <span class="font-weight-bold ms-1">30 done</span> this month
                </p>
              </div>
              <div class="col-lg-6 col-5 my-auto text-end">
                <div class="dropdown float-lg-end pe-4">
                  <a class="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-ellipsis-v text-secondary"></i>
                  </a>
                  <ul class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                    <li><a class="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                    <li><a class="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                    <li><a class="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Companies</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Members</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Budget
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Completion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="../assets/img/small-logos/logo-xd.svg" class="avatar avatar-sm me-3" alt="xd" />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Soft UI XD Version</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="avatar-group mt-2">
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Ryan Tompson"
                        >
                          <img src="../assets/img/team-1.jpg" alt="team1" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Romina Hadid"
                        >
                          <img src="../assets/img/team-2.jpg" alt="team2" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Alexander Smith"
                        >
                          <img src="../assets/img/team-3.jpg" alt="team3" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Jessica Doe"
                        >
                          <img src="../assets/img/team-4.jpg" alt="team4" />
                        </a>
                      </div>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="text-xs font-weight-bold"> $14,000 </span>
                    </td>
                    <td class="align-middle">
                      <div class="progress-wrapper w-75 mx-auto">
                        <div class="progress-info">
                          <div class="progress-percentage">
                            <span class="text-xs font-weight-bold">60%</span>
                          </div>
                        </div>
                        <div class="progress">
                          <div
                            class="progress-bar bg-gradient-info w-60"
                            role="progressbar"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../assets/img/small-logos/logo-atlassian.svg"
                            class="avatar avatar-sm me-3"
                            alt="atlassian"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Add Progress Track</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="avatar-group mt-2">
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Romina Hadid"
                        >
                          <img src="../assets/img/team-2.jpg" alt="team5" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Jessica Doe"
                        >
                          <img src="../assets/img/team-4.jpg" alt="team6" />
                        </a>
                      </div>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="text-xs font-weight-bold"> $3,000 </span>
                    </td>
                    <td class="align-middle">
                      <div class="progress-wrapper w-75 mx-auto">
                        <div class="progress-info">
                          <div class="progress-percentage">
                            <span class="text-xs font-weight-bold">10%</span>
                          </div>
                        </div>
                        <div class="progress">
                          <div
                            class="progress-bar bg-gradient-info w-10"
                            role="progressbar"
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../assets/img/small-logos/logo-slack.svg"
                            class="avatar avatar-sm me-3"
                            alt="team7"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Fix Platform Errors</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="avatar-group mt-2">
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Romina Hadid"
                        >
                          <img src="../assets/img/team-3.jpg" alt="team8" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Jessica Doe"
                        >
                          <img src="../assets/img/team-1.jpg" alt="team9" />
                        </a>
                      </div>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="text-xs font-weight-bold"> Not set </span>
                    </td>
                    <td class="align-middle">
                      <div class="progress-wrapper w-75 mx-auto">
                        <div class="progress-info">
                          <div class="progress-percentage">
                            <span class="text-xs font-weight-bold">100%</span>
                          </div>
                        </div>
                        <div class="progress">
                          <div
                            class="progress-bar bg-gradient-success w-100"
                            role="progressbar"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../assets/img/small-logos/logo-spotify.svg"
                            class="avatar avatar-sm me-3"
                            alt="spotify"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Launch our Mobile App</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="avatar-group mt-2">
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Ryan Tompson"
                        >
                          <img src="../assets/img/team-4.jpg" alt="user1" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Romina Hadid"
                        >
                          <img src="../assets/img/team-3.jpg" alt="user2" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Alexander Smith"
                        >
                          <img src="../assets/img/team-4.jpg" alt="user3" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Jessica Doe"
                        >
                          <img src="../assets/img/team-1.jpg" alt="user4" />
                        </a>
                      </div>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="text-xs font-weight-bold"> $20,500 </span>
                    </td>
                    <td class="align-middle">
                      <div class="progress-wrapper w-75 mx-auto">
                        <div class="progress-info">
                          <div class="progress-percentage">
                            <span class="text-xs font-weight-bold">100%</span>
                          </div>
                        </div>
                        <div class="progress">
                          <div
                            class="progress-bar bg-gradient-success w-100"
                            role="progressbar"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="../assets/img/small-logos/logo-jira.svg" class="avatar avatar-sm me-3" alt="jira" />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Add the New Pricing Page</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="avatar-group mt-2">
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Ryan Tompson"
                        >
                          <img src="../assets/img/team-4.jpg" alt="user5" />
                        </a>
                      </div>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="text-xs font-weight-bold"> $500 </span>
                    </td>
                    <td class="align-middle">
                      <div class="progress-wrapper w-75 mx-auto">
                        <div class="progress-info">
                          <div class="progress-percentage">
                            <span class="text-xs font-weight-bold">25%</span>
                          </div>
                        </div>
                        <div class="progress">
                          <div
                            class="progress-bar bg-gradient-info w-25"
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="25"
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../assets/img/small-logos/logo-invision.svg"
                            class="avatar avatar-sm me-3"
                            alt="invision"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Redesign New Online Shop</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="avatar-group mt-2">
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Ryan Tompson"
                        >
                          <img src="../assets/img/team-1.jpg" alt="user6" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Jessica Doe"
                        >
                          <img src="../assets/img/team-4.jpg" alt="user7" />
                        </a>
                      </div>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="text-xs font-weight-bold"> $2,000 </span>
                    </td>
                    <td class="align-middle">
                      <div class="progress-wrapper w-75 mx-auto">
                        <div class="progress-info">
                          <div class="progress-percentage">
                            <span class="text-xs font-weight-bold">40%</span>
                          </div>
                        </div>
                        <div class="progress">
                          <div
                            class="progress-bar bg-gradient-info w-40"
                            role="progressbar"
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="40"
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="card h-100">
          <div class="card-header pb-0">
            <h6>Orders overview</h6>
            <p class="text-sm">
              <i class="fa fa-arrow-up text-success" aria-hidden="true"></i>
              <span class="font-weight-bold">24%</span> this month
            </p>
          </div>
          <div class="card-body p-3">
            <div class="timeline timeline-one-side">
              <div class="timeline-block mb-3">
                <span class="timeline-step">
                  <i class="ni ni-bell-55 text-success text-gradient"></i>
                </span>
                <div class="timeline-content">
                  <h6 class="text-dark text-sm font-weight-bold mb-0">$2400, Design changes</h6>
                  <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 PM</p>
                </div>
              </div>
              <div class="timeline-block mb-3">
                <span class="timeline-step">
                  <i class="ni ni-html5 text-danger text-gradient"></i>
                </span>
                <div class="timeline-content">
                  <h6 class="text-dark text-sm font-weight-bold mb-0">New order #1832412</h6>
                  <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 11 PM</p>
                </div>
              </div>
              <div class="timeline-block mb-3">
                <span class="timeline-step">
                  <i class="ni ni-cart text-info text-gradient"></i>
                </span>
                <div class="timeline-content">
                  <h6 class="text-dark text-sm font-weight-bold mb-0">Server payments for April</h6>
                  <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 9:34 PM</p>
                </div>
              </div>
              <div class="timeline-block mb-3">
                <span class="timeline-step">
                  <i class="ni ni-credit-card text-warning text-gradient"></i>
                </span>
                <div class="timeline-content">
                  <h6 class="text-dark text-sm font-weight-bold mb-0">New card added for order #4395133</h6>
                  <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">20 DEC 2:20 AM</p>
                </div>
              </div>
              <div class="timeline-block mb-3">
                <span class="timeline-step">
                  <i class="ni ni-key-25 text-primary text-gradient"></i>
                </span>
                <div class="timeline-content">
                  <h6 class="text-dark text-sm font-weight-bold mb-0">Unlock packages for development</h6>
                  <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">18 DEC 4:54 AM</p>
                </div>
              </div>
              <div class="timeline-block">
                <span class="timeline-step">
                  <i class="ni ni-money-coins text-dark text-gradient"></i>
                </span>
                <div class="timeline-content">
                  <h6 class="text-dark text-sm font-weight-bold mb-0">New order #9583120</h6>
                  <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">17 DEC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue'
import { gsap } from 'gsap'

import { getHotelSaleInfo } from '../api/hoom'
import { getGuestList } from '../api/custom'
import BarChart from '../components/charts/hoomBar.vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const guestList: Ref<any> = ref([])

const loadGuestList = async () => {
  const res = await getGuestList(1, 5, 0, 0)
  guestList.value = res
}

const moneyEl = ref<HTMLElement | null>(null)
const userEl = ref<HTMLElement | null>(null)
const clientEl = ref<HTMLElement | null>(null)
const saleEl = ref<HTMLElement | null>(null)

// 数字递增效果
const numberAnimation = (el: HTMLElement, number: number, text: string) => {
  const tl = gsap.timeline()
  tl.to(el, {
    duration: 2,
    innerText: number.toFixed(0),
    ease: 'power4.out',
    onUpdate: () => {
      el.innerText = text + Math.ceil(Number(el.innerText)).toString()
    }
  })
}

// 时间格式化
// 2023-12-05T16:00:00.000Z
// 26 March 2020, at 13:45 PM
const formatDate = (date: string) => {
  // 如果 date 为空，直接返回空字符串
  if (!date) {
    return ''
  }
  const dateObj = new Date(date)
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Auguest',
    'September',
    'October',
    'November',
    'December'
  ]
  const year = dateObj.getFullYear()
  const month = monthList[dateObj.getMonth()]
  const day = dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate()
  const hour = dateObj.getHours() < 10 ? `0${dateObj.getHours()}` : dateObj.getHours()
  const minute = dateObj.getMinutes() < 10 ? `0${dateObj.getMinutes()}` : dateObj.getMinutes()
  const am_pm = dateObj.getHours() < 12 ? 'AM' : 'PM'

  return `${day} ${month} ${year}, at ${hour}:${minute} ${am_pm}`
}

onMounted(() => {
  if (moneyEl.value && userEl.value && clientEl.value && saleEl.value) {
    numberAnimation(moneyEl.value, 53000, '$')
    numberAnimation(userEl.value, 2300, '')
    numberAnimation(clientEl.value, 3462, '+')
    numberAnimation(saleEl.value, 103430, '$')
  }
})

onMounted(() => {
  getHotelSaleInfo()
  loadGuestList()
})
</script>
