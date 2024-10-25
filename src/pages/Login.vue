<template>
  <div class="container">
    <div class="form-wrapper">
      <form @submit.prevent="onSubmit" class="form">
        <h1 class="greeting">{{ greeting }}</h1>
        <div class="input-group">
          <div class="form-item" v-if="isRegisterMode">
            <label for="name">Nome</label>
            <input type="text" id="name" v-model="form.name" placeholder="Insira seu nome" class="input" />
            <span class="error-message">{{ errors.name }}</span>
          </div>
          <div class="form-item" v-if="isRegisterMode">
            <label for="cpf">CPF</label>
            <input type="text" id="cpf" v-model="form.cpf" placeholder="Insira seu CPF" class="input" />
            <span class="error-message">{{ errors.cpf }}</span>
          </div>
          <div class="form-item">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" placeholder="Insira seu email" class="input" />
            <span class="error-message">{{ errors.email }}</span>
          </div>
          <div class="form-item">
            <label for="password">Senha</label>
            <input type="password" id="password" v-model="form.password" placeholder="Insira sua senha" class="input" />
            <span class="error-message">{{ errors.password }}</span>
          </div>
        </div>
        <button type="submit" class="submit-button">
          <span v-if="isLoading">Carregando...</span>
          <span v-else>{{ isRegisterMode ? 'Registrar' : 'Entrar' }}</span>
        </button>
        <p class="link-group">
          <span @click="toggleMode" class="link">{{ isRegisterMode ? 'Bem vindo de volta!' : 'Registre-se' }}</span>
          <span @click="resetPassword" class="link">Esqueci a senha</span>
        </p>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>
  
<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

const registerSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  cpf: z.string().min(1, "CPF é obrigatório"),
  email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export default {
  setup() {
    const router = useRouter();
    const form = ref({
      name: '',
      cpf: '',
      email: '',
      password: '',
    });
    const errors = ref({});
    const errorMessage = ref(null);
    const isLoading = ref(false);
    const isRegisterMode = ref(false);

    const greeting = computed(() => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) return "Bom dia! ☀️";
      if (hour >= 12 && hour < 18) return "Boa tarde! 🌇";
      return "Boa noite! 🌃";
    });

    async function onSubmit() {
      isLoading.value = true;
      errors.value = {};

      try {
        const schema = isRegisterMode.value ? registerSchema : loginSchema;
        schema.parse(form.value);

        const { email, password, name, cpf } = form.value;
        const url = isRegisterMode.value ? 'https://landing-page-back-end.onrender.com/api/register' : 'https://landing-page-back-end.onrender.com/api/login/';
        const body = isRegisterMode.value ? { email, password, name, cpf } : { email, password };

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          throw new Error('Erro durante o cadastro!!');
        }
        
        const data = await response.json();
        console.log(data)
         localStorage.setItem('token', data.token); // Supondo que o token esteja no campo 'token'
         localStorage.setItem('userName', data.user.name);
        router.push('/');
      } catch (error) {
        if (error.errors) {
          error.errors.forEach(e => {
            errors.value[e.path[0]] = e.message;
          });
        } else {
          errorMessage.value = error.message || "Credenciais inválidas. Tente novamente.";
        }
      } finally {
        isLoading.value = false;
      }
    }

    function toggleMode() {
      isRegisterMode.value = !isRegisterMode.value;
      form.value.name = '';
      form.value.cpf = '';
      form.value.email = '';
      form.value.password = '';
      errors.value = {};
      errorMessage.value = null;
    }

    function resetPassword() {
      // Lógica para redefinição de senha (não implementada aqui)
      alert('Redefinição de senha solicitada!');
    }

    return {
      form,
      errors,
      errorMessage,
      isLoading,
      onSubmit,
      greeting,
      toggleMode,
      resetPassword,
      isRegisterMode,
    };
  },
};

</script>
  
<style src="../styles/login.css"></style>
  