<script setup>
defineProps({
  subHeading: String,
  heading: String
})
</script>

<template>
  <div class="text-center pb-14">
    <label class="block" data-aos="fade-up">
      {{ subHeading }}
    </label>
    <h2 class="md:pt-2 lg:pt-3.5" data-aos="fade-up">
      {{ heading }}
    </h2>
  </div>
</template>
