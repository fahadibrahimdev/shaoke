<script setup>
import {computed, onMounted, onUnmounted} from "vue";
import BaseButton from "@/@core/components/BaseButton.vue";
import { toggleNavShadow } from "@/@core/utils/functions";
import {useRoute} from "vue-router";

const emit = defineEmits(['toggleSidebar'])

const route = useRoute()
onMounted(() => {
  window.addEventListener('scroll', () => toggleNavShadow(route.name));
})
onUnmounted(() => {
  window.removeEventListener('scroll', () => toggleNavShadow);
});

const navLinks = [
  { label: 'Home', route: 'HomeView' },
  { label: 'Why SHAOKE', route: 'WhyUsView' },
  { label: 'Solutions', route: 'SolutionsView' },
  { label: 'Cases', route: 'CasesView' },
  { label: 'Contact Us', route: 'ContactUsView' },
]

const navColorCheck = computed(() => {
  return {
    nav: ['HomeView'].includes(route.name) ? 'bg-transparent border-white text-white py-6' : 'shadow-nav bg-white border-navy text-navy py-6',
    logo: ['HomeView'].includes(route.name) ? '' : 'brightness-0'
  }
})
</script>

<template>
  <nav class="fixed top-0 left-0 w-full border-b z-30 transition-all" :class="[navColorCheck.nav]">
    <div class="container">
      <div class="flex justify-between items-center">

        <RouterLink to="/">
          <img src="/logo-shaoke.png" alt="Brand Logo" class="brand-logo" :class="[navColorCheck.logo]">
        </RouterLink>

        <ul class="hidden lg:flex gap-7 xl:gap-12">
          <template v-for="(navLink, i) in navLinks" :key="i">
            <li class="nav-links text-inherit" :class="{ 'active-view':  route.name === navLink.route }">
              <RouterLink
                  :to="{ name: navLink.route, force: true }"
              >
                {{ navLink.label }}
              </RouterLink>
            </li>
          </template>
        </ul>

        <div class="hidden lg:block">
          <BaseButton>Track Your Parcel</BaseButton>
        </div>

        <span
            class="inline lg:hidden icon-styled-hamburger text-lg text-inherit"
            @click="emit('toggleSidebar', true)"
        />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-links {
  @apply text-sm lg:text-base xl:text-xl font-bold tracking-[.2px] relative inline-block
}

.nav-links:after, .active-view:after{
  content: '';
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  height: 2px;
  background-color: theme('colors.primary');
  transition: width 0.3s ease-in-out;
}
.nav-links:after{
  width: 0;
}
.nav-links.active-view:after{
  width: 100%;
}
nav:not(.bg-white) .nav-links:after{
  background-color: white;
}
nav:is(.text-navy) .nav-links:after{
  background-color: theme('colors.navy');
}
nav:is(.text-navy) .nav-links.active-view:after{
  background-color: theme('colors.primary');
}
nav:not(.bg-white) .active-view{
  color: white;
}
nav:not(.bg-white) .active-view:after{
  background-color: white;
}
.active-view{
  color: theme('colors.primary');
}
.nav-links:hover:after{
  width: 100%;
}
</style>
