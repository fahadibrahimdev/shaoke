<script setup>
defineProps({
  content: Object,
  reverse: Boolean
})
</script>

<template>
  <div class="grid md:grid-cols-2 gap-14 pb-14 last:pb-0">
    <div
        class="client-details relative"
        :class="[reverse ? 'order-1 md:order-2' : 'order-1']"
    >
      <div class="">
        <div class="flex flex-col justify-center py-10 md:pr-10 pr-3" data-aos="fade-right">
          <h2 class="pb-6">{{ content.name }}</h2>
          <template v-for="(item, i) in content.details" :key="i">
            <h4 v-if="item.heading" class="pb-3.5">
              {{ item.heading }}
            </h4>
            <p v-if="item.text" class="pb-6 last:pb-0">
              {{ item.text }}
            </p>
          </template>
        </div>
        <hr
            class="border-r border-[#DBDBDB] absolute top-0 right-0"
            data-aos="height-offset"
            data-aos-duration="2500"
            data-aos-anchor-placement="top-center"
        >
        <hr
            class="border-t border-[#DBDBDB]"
            data-aos="width-offset"
            data-aos-duration="1500"
        >
      </div>
      <div class="view-more-group relative">
        <div
            class="absolute w-4 h-4 bg-primary -top-2 -right-2 rounded-full"
            data-aos="zoom-in-scale"
            data-aos-duration="2000"
        />
        <div
            class="flex items-center gap-5 py-5"
            data-aos="fade-up"
            data-aos-duration="1500"
        >
          <div
              class="flex justify-center items-center cursor-pointer rounded-full bg-primary text-2xl text-white w-14 h-14 shrink-0">
            +
          </div>
          <div class="flex flex-col">
            <span>View More</span>
            <span>About {{ content.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div
        class="client-logo-wrapper shrink-0"
        :class="[reverse ? 'order-2 md:order-1' : 'order-2']"
    >
      <img
          :src="content.image"
          :alt="content.name"
          data-aos="fade-in"
          data-aos-duration="2000"
          class="mx-auto h-full object-contain"
      >
    </div>
  </div>
</template>

<style>
.border-b[data-aos="fade-up"] {
  opacity: 0;
  transition-property: opacity;
}

.border-b[data-aos="fade-up"].aos-animate {
  opacity: 1;
}

[data-aos="width-offset"] {
  width: 0;
  transition-property: transform, width;
}
[data-aos="width-offset"].aos-animate {
  width: 100%;
}

[data-aos="height-offset"] {
  height: 0;
  transition-property: transform, height;
}
[data-aos="height-offset"].aos-animate {
  height: 100%;
}

[data-aos="zoom-in-scale"] {
  transform: scale(.1);
  transition-property: transform;
}
[data-aos="zoom-in-scale"].aos-animate {
  transform: scale(1);
}
</style>
