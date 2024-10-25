<template>
    <div>
      <Navbar/>
      <HeroSection />
      <HowToParticipate />
      <Prizes />
      <FAQ />
      <Winners />
      <Draws />
      <Footer />
      <NuxtPage />
    </div>
  </template>
  
  <script setup>
  import HowToParticipate from '../components/HowToParticipate.vue';
  import Prizes from '../components/Prizes.vue';
  import FAQ from '../components/FAQ.vue';
  import Winners from '../components/Winners.vue';
  import Draws from '../components/Draws.vue';
  import Footer from '../components/Footer.vue';
  import HeroSection from '../components/HeroSection.vue';
  import Navbar from '../components/Navbar.vue';
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