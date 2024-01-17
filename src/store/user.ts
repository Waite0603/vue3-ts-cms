import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userData: any = ref('')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setUser = (data: any) => {
      userData.value = data
    }

    const clearUser = () => {
      // 清理 token 以及 user
      localStorage.removeItem('token')
      userData.value = ''
    }

    return {
      userData,
      setUser,
      clearUser
    }
  },
  // 开启持久化存储
  persist: true
})
