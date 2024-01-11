<script setup>
import {ref} from "vue";
import BaseButton from "@/@core/components/BaseButton.vue";

const emits = defineEmits(['toggleCookieBanner'])
const updateCookieBanner = () => {

}
</script>

<template>
  <div class="fixed bottom-0 left-0 w-full bg-white drop-shadow-2xl">
    <div class="container py-3 sm:py-4 md:py-8 xl:py-12">
      <div class="grid grid-cols-12 justify-between items-center gap-3 lg:gap-0">
        <div class="col-span-12 lg:col-span-7">
          <div class="flex items-center gap-3 sm:gap-5">
            <img src="/images/cookies.png" alt="Cookies" class="shrink-0 w-[15%] sm:w-auto">
            <p class="text-sm sm:text-base md:text-lg md:pr-10">
              Our website use cookies. By continuing navigating, we assume your permission to deploy cookies as detailed
              in our Privacy Policy.
            </p>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-5">
          <div class="flex justify-end items-center gap-12">
            <div class="flex gap-3">
              <BaseButton @click="() => emits('toggleCookieBanner')">
                <span class="icon-cookie text-white"></span>Accept cookies
              </BaseButton>
              <BaseButton outlined @click="() => emits('toggleCookieBanner')">Decline</BaseButton>
            </div>
            <span @click="() => emits('toggleCookieBanner')" class="icon-x text-3xl text-[#272D4B] cursor-pointer hidden sm:block"></span>
            <span @click="() => emits('toggleCookieBanner')" class="icon-x text-2xl text-[#272D4B] absolute top-1 right-1 sm:hidden"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
