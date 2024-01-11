<script setup>
import { ref } from 'vue'
import BaseButton from "@/@core/components/BaseButton.vue";
import SectionTitle from "@/@core/components/SectionTitle.vue";
const faqList = ref([
  {
    title: 'Question no 1',
    content: 'We work with you from the beginning, just like an in-house team who cares about your business target.',
    isOpened: false
  },
  {
    title: 'Question no 2',
    content: 'We work with you from the beginning, just like an in-house team who cares about your business target.',
    isOpened: false
  },
  {
    title: 'Question no 3',
    content: 'We work with you from the beginning, just like an in-house team who cares about your business target.',
    isOpened: false
  },
  {
    title: 'Question no 4',
    content: 'We work with you from the beginning, just like an in-house team who cares about your business target.',
    isOpened: false
  },
])
</script>

<template>
  <section class="faqs-section bg-[#F8F8F8] py-28">
    <div class="container">
      <SectionTitle
          sub-heading="Faqs"
          heading="Frequently Asked Questions"
      />

      <div class="faqs-wrapper md:w-3/4 mx-auto">
        <template v-for="(item, i) in faqList" :key="i">
          <div
              class="faq-item border-b border-[#DBDBDB] cursor-pointer pb-6 pt-9"
              @click="faqList[i].isOpened = !faqList[i].isOpened"
              data-aos="fade-up"
              :data-aos-delay="i * 200"
          >
            <div class="flex flex-col gap-6">
              <div class="flex justify-between">
                <h4>
                  {{ item.title }}
                </h4>
                <div
                    class="flex justify-center items-center cursor-pointer rounded-full text-2xl text-white w-10 h-10 shrink-0"
                    :class="[faqList[i].isOpened ? 'bg-[#D0D0D1]' : 'bg-primary']"
                >
                  {{ faqList[i].isOpened ? '-' : '+' }}
                </div>
              </div>
              <p v-if="item.isOpened" class="md:pr-6 block">
                {{ item.content }}
              </p>
            </div>
          </div>
        </template>
      </div>

      <div
          class="pt-9 md:pt-14 lg:pt-[76px]"
          data-aos="fade-up"
      >
        <BaseButton class="mx-auto">View All Answers</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
