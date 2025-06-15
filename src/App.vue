<script setup>
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutUs from './components/AboutUs.vue';
import Programs from './components/Programs.vue';
import Testimonials from './components/Testimonials.vue';
import CallToAction from './components/CallToAction.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <AboutUs />
      <Programs />
      <Testimonials />
      <CallToAction />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Global styles are in src/style.css */
</style>
