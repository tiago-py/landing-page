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
      <div v-if="userName" class="login-link">
        Olá, {{ userName }}.
        <button @click="logout" class="logout-button">Sair</button>
      </div>
      <router-link v-else to="login" class="login-link">LOGIN/ CADASTRAR</router-link>
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
const userName = ref(''); // Variável para armazenar o nome do usuário

// Função para alternar o estado do menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Função para verificar se é mobile
const updateMobileStatus = () => {
  isMobile.value = window.innerWidth <= 768;
};

// Função para carregar o nome do usuário
const loadUserName = () => {
  // Aqui você pode obter o nome do usuário de onde estiver armazenado
  userName.value = localStorage.getItem('userName') || '';
};

const logout = () => {
  // Remover dados do usuário do armazenamento local
  localStorage.removeItem('token');
  localStorage.removeItem('userName');
  
  // Redirecionar para a página de login
  router.push('/login');
};

// Ao montar o componente, inicializar o status do mobile e adicionar o listener para resize
onMounted(() => {
  updateMobileStatus();
  loadUserName(); // Carrega o nome do usuário
  window.addEventListener('resize', updateMobileStatus);
});

</script>

<style src="../styles/header.css"></style>
