<script setup>
import {ref} from 'vue'
import NavBar from '@/layouts/Default/components/NavBar.vue'
import Footer from '@/layouts/Default/components/Footer.vue'
import CookieBanner from "@/@core/components/CookieBanner.vue";
import SideBar from "@/layouts/Default/components/SideBar.vue";

const isSideBarOpen = ref(false)

const showCookieBanner = ref(JSON.parse(localStorage.getItem('showCookieBanner')))

const cookiesState = () => {
  if (localStorage.getItem('showCookieBanner') === null || JSON.parse(localStorage.getItem('showCookieBanner'))) {
    localStorage.setItem('showCookieBanner', true.toString())
    showCookieBanner.value = true
  }
}

const toggleBanner = () => {
  showCookieBanner.value = false
  localStorage.setItem('showCookieBanner', false.toString())
}
cookiesState()
</script>

<template>
  <NavBar @toggle-sidebar="(val) => isSideBarOpen = val" />
  <slot />
  <Footer />
  <CookieBanner
    v-if="showCookieBanner"
    @toggle-cookie-banner="toggleBanner"
  />
  <SideBar
      :is-expanded="isSideBarOpen"
      @toggle-sidebar="(val) => isSideBarOpen = val"
  />
</template>

