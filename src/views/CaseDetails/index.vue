<script setup>
import DefaultLayout from "@/layouts/Default/index.vue";
import About from "@/views/CaseDetails/components/About.vue";
import History from "@/views/CaseDetails/components/History.vue";
import CorePillars from "@/views/CaseDetails/components/CorePillars.vue";
import BrandArticles from "@/views/HomeView/component/BrandArticles.vue";
// import CustomerService from "@/views/CaseDetails/components/CustomerService.vue";
</script>

<template>
  <DefaultLayout>
    <About />
    <History />
    <CorePillars />
<!--    <CustomerService />-->
    <BrandArticles />
  </DefaultLayout>
</template>

