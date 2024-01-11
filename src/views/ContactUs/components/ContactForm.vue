<script setup>

import BaseButton from "@/@core/components/BaseButton.vue";
</script>

<template>
  <form class="grid md:grid-cols-2 gap-5">
    <div
        class="col-span-2"
        data-aos="fade-up"
    >
      <label>Purpose</label>
      <input required type="text" placeholder="Choose">
    </div>
    <div
        class="col-span-2 md:col-span-1"
        data-aos="fade-up"
        :data-aos-delay="200"
    >
      <label>Name</label>
      <input required type="text" placeholder="Alex">
    </div>
    <div
        class="col-span-2 md:col-span-1"
        data-aos="fade-up"
        :data-aos-delay="400"
    >
      <label>Phone</label>
      <input type="text" placeholder="+1 840 841 25 69">
    </div>
    <div
        class="col-span-2 md:col-span-1"
        data-aos="fade-up"
        :data-aos-delay="600"
    >
      <label>Email</label>
      <input required type="email" placeholder="abc@gmail.com">
    </div>
    <div
        class="col-span-2 md:col-span-1"
        data-aos="fade-up"
        :data-aos-delay="800"
    >
      <label>Subject</label>
      <input type="text" placeholder="Business">
    </div>
    <div
        class="col-span-2"
        data-aos="fade-up"
    >
      <label>Message</label>
      <textarea type="text" rows="5" placeholder="How can  we help you" />
    </div>
    <div
        class="col-span-2"
        data-aos="fade-up"
    >
      <div class="inline-flex sm:items-center">
        <div class="relative flex items-start sm:items-center pt-0.5 sm:pt-0 pb-0 cursor-pointer">
          <input
              type="checkbox"
                 class="p-2 md:p-3 before:content[''] peer relative grow-0 shrink-0 h-1 w-1 xl:!h-3 xl:!w-3 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-primary checked:before:primary hover:before:opacity-10"
                 id="check" />
          <span
              class="absolute text-white transition-opacity opacity-0 pointer-events-none top-[12px] md:top-[14px]  left-2/4 -translate-y-2/4 -translate-x-2/4 scale-1 md:scale-150 peer-checked:opacity-100">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
           stroke="currentColor" stroke-width="1">
        <path fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"></path>
      </svg>
    </span>
        </div>
        <label for="check" class="text-sm md:text-base font-semibold text-gray-700 cursor-pointer pl-3 select-none pb-0">
          I agree that my data is collected and stored.
        </label>
      </div>
    </div>
    <div
        class="col-span-2"
        data-aos="fade-up"
    >
      <BaseButton class="w-full sm:w-auto">Get in touch</BaseButton>
    </div>
  </form>
</template>
