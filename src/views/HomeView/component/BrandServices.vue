<script setup>
const servicesList = [
  { serviceName: 'Customs Service', icon: 'custom-list'  },
  { serviceName: 'Linehaul and Warehousing', icon: 'warehouse'  },
  { serviceName: 'Last Mile', icon: 'package-dropping'  },
  { serviceName: 'Fulfillment', icon: 'shipping-process'  },
]
</script>

<template>
  <section class="brand-services py-24 sm:py-32">
    <div class="container" data-aos="fade-up">
      <label>
        Top Services
      </label>
      <div class="flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-20 pb-16">
        <h2>
          Focus on what you do best, and Shaoke will take care of the rest
        </h2>
        <p>
          We provide wide range one-stop solution covering Customs Service, Linehaul and Warehousing, and Last Mile, to
          assist you in succeeding in global market
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <template v-for="(service, i) in servicesList" :key="i">
          <div
              class="flex flex-col justify-between border-b md:border-r md:border-b-0 border-[#DBDBDB] md:last:border-0 py-10"
              :class="{'md:border-r-0 lg:border-r': i % 2 !== 0}"
              data-aos="fade-up"
              :data-aos-delay="i*200"
          >
            <span
                :class="[`icon-${service.icon}`]"
                class="text-primary text-8xl"
            />
            <div>
              <h3 class="mt-14 mb-10 pr-10">
              {{ service.serviceName }}
              </h3>
              <span class="flex items-center gap-3 cursor-pointer w-fit group hover:text-primary transition">
                Read More
                <span class="icon-right-long-arrow mt-1 group-hover:translate-x-3 transition ease-in-out"></span>
              </span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
