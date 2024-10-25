<template>
  <transition name="slide-fade">
    <div v-if="isMenuOpen" class="mobile-menu">
      <button class="close-button" @click="$emit('closeMenu')">&times;</button>
      <nav>
        <div v-if="userName" class="login-link" style="margin-bottom: 30px;">Bem-vindo, {{ userName }}!</div>
        <div v-else class="auth-buttons">
          <router-link to="login" class="login-link">LOGIN/ CADASTRAR</router-link>
        </div>
        <a href="#">HOME</a>
        <a href="#">COMO PARTICIPAR</a>
        <a href="#">PRÊMIOS</a>
        <a href="#">DÚVIDAS FREQUENTES</a>
        <a href="#">GANHADORES</a>
      </nav>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  isMenuOpen: Boolean
});
const userName = computed(() => {
  return localStorage.getItem('userName');
});
</script>

<style src="../styles/mobileMenu.css"></style>
