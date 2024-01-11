<script setup>
import {ref, onMounted} from 'vue'
const achievementSection = ref(null)
function animateValue(id, start, end, duration) {
  if (start === end) return;
  const range = end - start;
  let current = start;
  const increment = end > start? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const obj = document.getElementById(id);
  const timer = setInterval(function() {
    current += increment;
    obj.innerHTML = `${current}+`;
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

onMounted(() => {
  const observer = new IntersectionObserver(animatingNumbers, {
    threshold: 0.5, // Adjust threshold based on your needs
  });
  observer.observe(achievementSection.value);
})

function animatingNumbers() {
  animateValue("deliveries", 0, 295, 1000);
  animateValue("kmPerMonth", 0, 340, 1000);
  animateValue("totalGoods", 0, 419, 1000);
  animateValue("clients", 0, 515, 1000);
}
</script>

<template>
  <section class="brand-achievements bg-primary py-16 sm:py-24">
    <div class="container">
      <div class="grid sm:grid-cols-2 md:grid-cols-4 justify-center gap-6 sm:gap-0" ref="achievementSection">
        <div
            class="text-white sm:border-r border-white text-center py-3"
            data-aos="fade-up"
        >
          <div class="text-sm uppercase pb-3">
            Delivered Packages
          </div>
          <div id="deliveries" class="text-5xl md:text-6xl">
            0
          </div>
        </div>
        <div
            class="text-white sm:border-r border-white text-center py-3"
            data-aos="fade-up"
            :data-aos-delay="200"
        >
          <div class="text-sm uppercase pb-3.5">
            KM Per Month
          </div>
          <div id="kmPerMonth" class="text-5xl md:text-6xl">
            0
          </div>
        </div>
        <div
            class="text-white sm:border-r border-white text-center py-3"
            data-aos="fade-up"
            :data-aos-delay="400"
        >
          <div class="text-sm uppercase pb-3">
            Tons Of Goods
          </div>
          <div id="totalGoods" class="text-5xl md:text-6xl">
            0
          </div>
        </div>
        <div
            class="text-white text-center py-3"
            data-aos="fade-up"
            :data-aos-delay="600"
        >
          <div class="text-sm uppercase pb-3">
            Satisfied Clients
          </div>
          <div id="clients" class="text-5xl md:text-6xl">
            0
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
