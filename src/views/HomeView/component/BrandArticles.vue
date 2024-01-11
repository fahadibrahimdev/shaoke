<script setup>
import SectionTitle from "@/@core/components/SectionTitle.vue";

const blogLists = [
  {
    name: 'Commercial',
    description: 'People choose the safest and fastest delivery terms',
    dayPosted: 'Aug 15, 2022',
    image: '/images/bus.png'
  },
  {
    name: 'Commercial',
    description: 'Express delivery is going to slow down in 2024',
    dayPosted: 'Aug 15, 2022',
    image: '/images/plane.png'
  },
  {
    name: 'Commercial',
    description: 'All the ways the COVID19 influences freight shipment',
    dayPosted: 'Aug 15, 2022',
    image: '/images/ships.png'
  }
]
</script>

<template>
  <div class="brand-articles py-20 sm:py-32">
    <div class="container">
      <SectionTitle
        sub-heading="Blog Post"
        heading="Our Latest Articles"
      />

      <div class="blog-articles-list pt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <template v-for="(blog, index) in blogLists" :key="index">
            <div
                class="blog-card flex flex-col cursor-pointer"
                data-aos="fade-up"
                :data-aos-delay="index * 200"
            >
              <div class="blog-thumbnail">
                <img :src="blog.image" alt="Blog Image">
              </div>
              <div class="uppercase text-sm pt-5 pb-1 md:pb-3">
                {{ blog.name }}
              </div>
              <h3 class="line-clamp-2 mb-3">
                {{ blog.description }}
              </h3>
              <time class="text-sm text-[#A5A6AA]">
                {{ blog.dayPosted }}
              </time>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
