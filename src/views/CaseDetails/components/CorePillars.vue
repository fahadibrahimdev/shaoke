<script setup>
import SectionTitle from "@/@core/components/SectionTitle.vue";

const pillars = [
  {
    title: 'Build new data',
    description: 'to better understand its customers and drive personalization',
    icon: 'package-dropping'
  },
  {
    title: 'launch new businesses',
    description: 'to reach underserved consumer segments',
    icon: 'delivery-distribution'
  },
  {
    title: 'launch new digital channels',
    description: 'that would simplify the way customers engage with Telkomsel’s services',
    icon: 'package-flexibility'
  }
]
</script>

<template>
  <section class="case-core-pillars-section bg-[#F8F8F8] py-20 md:py-28">
    <div class="container">
      <SectionTitle
          sub-heading="Program"
          heading="Three core pillars"
      />

      <div class="location-cards-wrapper relative min-[500px]:px-10 md:px-0">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <template v-for="(item, i) in pillars" :key="i">
            <div
                class="flex flex-col justify-center text-center bg-white h-[350px]"
                data-aos="fade-up"
                :data-aos-delay="i * 200"
            >
              <div class="px-12">
                <span
                    class="text-primary text-8xl"
                    :class="[`icon-${item.icon}`]"
                />
                <h3 class="mt-5">
                  {{ item.title }}
                </h3>
                <p class="capitalize pt-3.5">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>

</style>
