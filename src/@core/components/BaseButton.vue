<script setup>
defineProps({
  outlined: Boolean
})

</script>

<template>
  <button
      class="flex justify-center items-center gap-2 rounded-md sm:rounded-[5px] text-base xl:text-lg sm:tracking-wider font-bold shrink-0 px-3.5 sm:px-5 py-1.5 sm:py-3 transition active:bg-navy active:text-white"
      :class="[outlined ? 'bg-white border border-[#707376] hover:bg-navy/20' : 'bg-primary text-white hover:bg-primary/90']"
  >
    <slot />
  </button>
</template>

<style scoped>

</style>
