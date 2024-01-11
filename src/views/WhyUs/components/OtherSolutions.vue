<script setup>
const solutions = [
  {
    heading: 'Savings',
    text: 'Savings of about 30-50%',
    icon: 'piggy-bank'
  },
  {
    heading: 'Quotation',
    text: 'Market-low quotation',
    icon: 'styled-newspaper'
  },
  {
    heading: 'Options',
    text: 'Multiple options to suit your needs',
    icon: 'distributions'
  }
]
</script>

<template>
  <section class="brand-solutions bg-primary lg:mb-40 py-24 sm:py-32 lg:py-0">
    <div class="container">
      <div class="flex flex-col lg:flex-row">
        <div class="flex flex-col justify-center text-white pb-16 lg:py-16" data-aos="fade-right">
          <label class="text-inherit">reasonable</label>
          <h2 class="text-inherit pt-4">
            Economical Solutions
          </h2>
        </div>

        <div class="hidden lg:grid grid-cols-3 gap-3.5">
          <div v-for="(item, i) in solutions" :key="i">
            <div
                data-aos="fade-down"
                :data-aos-delay="(i+1) * 600"
                data-aos-anchor-placement="top-center"
            >
              <div
                  class="flex flex-col justify-center -my-10 z-10 !h-96 bg-white px-5 shadow-[-40px_100px_70px_0px_rgba(121,121,121,0.05)]"
              >
              <span
                  :class="[`icon-${item.icon}`]"
                  class="text-primary text-8xl -ml-2"
              />
                <h3 class="pb-5 pt-2">
                  {{ item.heading }}
                </h3>
                <p>
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid lg:hidden md:grid-cols-2 lg:grid-cols-3 gap-7">
            <div
                v-for="(item, i) in solutions"
                :key="i"
                class="flex flex-col justify-center text-center bg-white h-[350px]"
                :data-aos-delay="i * 400"
                data-aos-anchor-placement="top-center"
            >
              <div class="px-12">
                <span
                    class="text-primary text-8xl"
                    :class="[`icon-${item.icon}`]"
                />
                <h3 class="mt-5">
                  {{ item.heading }}
                </h3>
                <p class="capitalize pt-3.5">
                  {{ item.text }}
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
