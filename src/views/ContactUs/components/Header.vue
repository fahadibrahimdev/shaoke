<script setup>
import ContactForm from "@/views/ContactUs/components/ContactForm.vue";
import PageTitle from "@/@core/components/PageTitle.vue";
</script>

<template>
  <header class="contact-us-section pb-16 md:pb-32 pt-40">
    <div class="container">
      <PageTitle />

      <div class="grid lg:grid-cols-2 gap-10" data-aos="fade-up">
        <div>
          <label>Contact Us</label>
          <h2 class="pb-5 pt-2 md:pt-3.5">
            Have Questions? Get in Touch!
          </h2>
          <p>
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </p>
          <div class="flex flex-col gap-3 xl:gap-5 pt-3 xl:pt-5">
            <div class="flex gap-3">
              <span class="icon-pin-location text-primary text-xl font-bold" />
              <p>14 Rue de la Belle Borne Bat1, Porte 13 (Cargo 8) Tremblay-en-France, France</p>
            </div>
            <div class="flex items-center gap-3">
              <span class="icon-phone text-primary text-xl" />
              <p>+1 840 841 25 69</p>
            </div>
            <div class="flex items-center gap-3">
              <span class="icon-mail text-primary text-xl" />
              <p>info@shaoke.com</p>
            </div>
          </div>
        </div>
        <div class="contact-form">
          <ContactForm />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
