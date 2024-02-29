import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layouts', () => {
  const sidebar = ref(false)
  function sidebarBtn() {
    sidebar.value =! sidebar.value
  }

  return { sidebar, sidebarBtn }
})
