<script setup>
import { useRoute } from "vue-router";

const route = useRoute()
</script>

<template>
  <div
      class="text-center pb-20 md:pb-32"
      data-aos="fade-down"
      data-aos-offset="10"
  >
    <h1>{{ route.meta?.title }}</h1>
  </div>
</template>

<style scoped>
h1{
  position: relative;
  display: inline;
}
h1::before{
  content: '';
  height: 2px;
  width: 60%;
  display: inline-block;
  position: absolute;
  top: -6px;
  left: 0;
  background: theme('colors.primary');
}
h1::after{
  content: '';
  height: 2px;
  width: 60%;
  display: inline-block;
  position: absolute;
  bottom: -6px;
  right: 0;
  background: theme('colors.primary');
}
</style>
