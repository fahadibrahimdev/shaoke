<script setup>
import DefaultLayout from '@/layouts/Default/index.vue'
import Header from "@/views/HomeView/component/Header.vue";
import BrandServices from "@/views/HomeView/component/BrandServices.vue";
import BrandAchievments from "@/views/HomeView/component/BrandAchievments.vue";
import BrandClients from "@/views/HomeView/component/BrandClients.vue";
import BrandArticles from "@/views/HomeView/component/BrandArticles.vue";
</script>

<template>
  <DefaultLayout>
    <Header />
    <BrandServices />
    <BrandClients />
    <BrandAchievments />
    <BrandArticles />
  </DefaultLayout>
</template>
