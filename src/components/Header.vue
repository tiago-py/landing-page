<template>
  <header>
    <div class="logo">LOGO</div>
    <nav class="navbar">
      <a href="#">HOME</a>
      <a href="#">COMO PARTICIPAR</a>
      <a href="#">PRÊMIOS</a>
      <a href="#">DÚVIDAS FREQUENTES</a>
      <a href="#">GANHADORES</a>
    </nav>
    <div class="auth-buttons" v-if="!isMobile">
      <a href="#" class="login-link">LOGIN/ CADASTRAR</a>
    </div>
    <div class="hamburger" @click="toggleMenu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <MobileMenu :isMenuOpen="isMenuOpen" @closeMenu="toggleMenu" />
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MobileMenu from './MobileMenu.vue'; // Verifique o caminho correto para o seu MobileMenu

const isMenuOpen = ref(false);
const isMobile = ref(false);

// Função para alternar o estado do menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Função para verificar se é mobile
const updateMobileStatus = () => {
  isMobile.value = window.innerWidth <= 768;
};

// Ao montar o componente, inicializar o status do mobile e adicionar o listener para resize
onMounted(() => {
  updateMobileStatus();
  window.addEventListener('resize', updateMobileStatus);
});
</script>

<style src="../styles/header.css"></style>
