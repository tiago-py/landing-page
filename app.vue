<template>
  <div>
    <Navbar/>
    <HeroSection />
    <HowToParticipate />
    <Prizes />
    <FAQ />
    <Winners />
    <Footer />
    <NuxtPage />
  </div>
</template>

<script setup>
import HowToParticipate from './src/components/HowToParticipate.vue';
import Prizes from './src/components/Prizes.vue';
import FAQ from './src/components/FAQ.vue';
import Winners from './src/components/Winners.vue';
import Footer from './src/components/Footer.vue';
import HeroSection from './src/components/HeroSection.vue';
import Navbar from './src/components/Navbar.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}
</style>