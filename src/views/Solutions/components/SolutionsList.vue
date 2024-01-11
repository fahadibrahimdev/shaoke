<script setup>
import DetailingWithImage from "@/@core/components/DetailingWithImage.vue";
import PageTitle from "@/@core/components/PageTitle.vue";

const solutionsList = [
  {
    name: 'Customs',
    image: '/images/solutions/customs.png',
    details: [
      {
        heading: 'Single Entry Point',
        text: 'Hand over the goods to SHAOKE at any European entry point and consider the rest done.'
      },
      {
        heading: 'Care-free Arrival and Handling',
        text: 'Review and inspection, product classification, cargo sorting, filing and licenses, regulatory compliance, document imaging, EDI solutions, and more.'
      },
      {
        heading: 'Self-Operated',
        text: 'Choose our self-operated customs clearance service at the Port of Leipzig, Germany, and enjoy a much more transparent and controlled process.'
      },
    ]
  },
  {
    name: 'Freight Forwarding',
    image: '/images/solutions/frieght-forwarding.png',
    details: [
      {
        heading: 'Route Planning',
        text: 'Identify and coordinate the best routes in terms of speed, cost, and reliability.'
      },
      {
        heading: 'Inland Transportation',
        text: 'Take goods to your assigned destinations with our holistic line haul and distribution network.'
      },
    ]
  },
  {
    name: 'Last-mile Delivery',
    image: '/images/solutions/last-mile-delivery.png',
    details: [
      {
        heading: 'Service Checkboxes',
        text: 'Picking, packing, labeling, kitting, assembly…'
      },
      {
        heading: 'Better Warehousing',
        text: 'Faster respondence and more secured & economical service from our self-operating warehouses at key locations pan Europe.'
      },
      {
        heading: 'Cater for Your Business',
        text: 'E-Commerce FBA/FBM, B2B, and Omnichannel fulfillment across Europe(99.9% coverage)'
      },
    ]
  },
  {
    name: 'Contract Logistics',
    image: '/images/solutions/contract-logistics.png',
    details: [
      {
        heading: 'Holistic Process',
        text: 'End-to-end supply chain solution design & management.'
      },
      {
        heading: 'Verified Credibility',
        text: 'Recognized by top players across industries.'
      },
      {
        heading: 'All-round Experience',
        text: 'Professionals with over 20 years of in-depth experience.'
      },
      {
        heading: 'Extensive Network',
        text: 'A reliable network of 120+ top-rated courier partners.'
      },
      {
        heading: 'Your In-house Experts',
        text: 'We work with you from the beginning, just like an in-house team who cares about your business target.'
      },
    ]
  }
]
</script>

<template>
  <section class="solutions-view pb-32 pt-40">
    <div class="container">
      <PageTitle />

      <div>
        <template v-for="(item, i) in solutionsList" :key="i">
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
