<template>
  <transition name="slide-fade">
    <div v-if="isMenuOpen" class="mobile-menu">
      <button class="close-button" @click="$emit('closeMenu')">&times;</button>
      <nav>
        <div v-if="userName" class="login-link" style="margin-bottom: 30px;">
          Bem-vindo, {{ userName }}!
          <button @click="logout" class="logout-button">Sair</button>
        </div>
        <div v-else>
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
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  isMenuOpen: Boolean
});

// Use uma referência reativa
const userName = ref('');

const router = useRouter();

const loadUserName = () => {
  userName.value = localStorage.getItem('userName') || '';
};

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userName');
  loadUserName(); // Atualiza o nome do usuário
  router.push('/login');
};

// Carregar o nome do usuário ao montar o componente
onMounted(loadUserName);
</script>

<style src="../styles/mobileMenu.css"></style>
