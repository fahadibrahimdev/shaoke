<script setup>
import DetailingWithImage from "@/@core/components/DetailingWithImage.vue";
import SectionTitle from "@/@core/components/SectionTitle.vue";

const caseLists = [
  {
    name: 'Shipkoo',
    image: '/images/shopki-logo.png',
    details: [
      {
        heading: null,
        text: 'Shipkoo is the one-stop solution provider offering express shipping and forwarding solutions, powered by\n' +
            '                advanced technologies and data analytics. Shaoke\'s efficient customs service strengthens Shipkoo\'s\n' +
            '                competitiveness in global market.'
      },
    ]
  },
  {
    name: 'DIDADI',
    image: '/images/didadi-logo.png',
    details: [
      {
        heading: null,
        text: 'DIDADI is a logistics tech company who provides FBA solutions to cross-border e-commerce sellers. As one of the strongest suppliers to DIDADI, Shaoke offers a choice of tracked and untracked services which use the best in-country last mile...'
      },
    ]
  },
]
</script>

<template>
  <section class="brand-clients pb-32">
    <div class="container">
      <SectionTitle
        sub-heading="Our Clients"
        heading="Case Study"
      />

      <div class="clients-content">
        <template v-for="(item, i) in caseLists" :key="i">
          <DetailingWithImage
              :content="item"
              :reverse="i % 2 !== 0"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
