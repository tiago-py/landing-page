<template>
  <transition name="slide-fade">
    <div v-if="isMenuOpen" class="mobile-menu">
      <button class="close-button" @click="$emit('closeMenu')">&times;</button>
      <nav>
        <div class="login-section">
          <a href="#" class="login-link">LOGIN/ CADASTRAR</a>
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
</script>

<style src="../styles/mobileMenu.css"></style>
