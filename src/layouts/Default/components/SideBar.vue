<script setup>
import { defineEmits } from "vue";
import BaseButton from "@/@core/components/BaseButton.vue";

defineProps({
  isExpanded: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['toggleSidebar'])

let startX = 0;
let endX = 0;

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  const deltaX = startX - endX;
  const minSwipeDistance = 50;
  if (deltaX > minSwipeDistance) emit('toggleMenuSidebar', false)
});

const navLinks = [
  { label: 'Home', route: 'HomeView' },
  { label: 'Why SHAOKE', route: 'WhyUsView' },
  { label: 'Solutions', route: 'SolutionsView' },
  { label: 'Cases', route: 'CasesView' },
  { label: 'Contact Us', route: 'ContactUsView' },
]

</script>

<template>
  <div
      class="sidebar-overlay bg-black/70 w-full h-full fixed top-0 left-0 z-30"
      :class="[isExpanded ? 'block' : 'hidden']"
      @click="emit('toggleSidebar', false)"
  />

  <div class="collapsible-sidebar shadow-xl"
       :class="{ 'expanded': isExpanded }"
  >
    <div class="absolute right-3 top-3">
      <div
          class="rounded-full w-7 h-7 flex justify-center items-center bg-primary"
          @click="emit('toggleSidebar', false)"
      >
        <span class="icon-x text-white text-xl"></span>
      </div>
    </div>
    <div class="sidebar-content mt-14 px-5">
      <ul class="mobile-nav-links flex flex-col space-y-4 text-xl text-black mb-6">
        <template v-for="(navLink, i) in navLinks" :key="i">
          <RouterLink
              class="font-bold"
              :to="{ name: navLink.route, force: true }"
          >
            {{ navLink.label }}
          </RouterLink>
        </template>
      </ul>

      <BaseButton>
        Track Your Parcel
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>
.collapsible-sidebar{
  position: fixed;
  top: 0;
  left: -250px;
  height: 100vh;
  width: 250px;
  z-index: 1111;
  background: white;
  transition: left 0.4s ease 0s;
}
.collapsible-sidebar.expanded{
  left: 0;
}
</style>
