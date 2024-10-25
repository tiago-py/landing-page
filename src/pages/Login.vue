<template>
    <div class="container">
      <div class="form-wrapper">
        <form @submit.prevent="onSubmit" class="form">
          <h1 class="greeting">{{ greeting }}</h1>
          <div class="input-group">
            <div class="form-item" v-if="isRegisterMode">
              <label for="name">Nome</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                placeholder="Insira seu nome"
                class="input"
              />
              <span class="error-message">{{ errors.name }}</span>
            </div>
            <div class="form-item" v-if="isRegisterMode">
              <label for="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                v-model="form.cpf"
                placeholder="Insira seu CPF"
                class="input"
              />
              <span class="error-message">{{ errors.cpf }}</span>
            </div>
            <div class="form-item">
              <label for="username">Email</label>
              <input
                type="email"
                id="username"
                v-model="form.username"
                placeholder="Insira seu email"
                class="input"
              />
              <span class="error-message">{{ errors.username }}</span>
            </div>
            <div class="form-item">
              <label for="password">Senha</label>
              <input
                type="password"
                id="password"
                v-model="form.password"
                placeholder="Insira sua senha"
                class="input"
              />
              <span class="error-message">{{ errors.password }}</span>
            </div>
          </div>
          <button type="submit" class="submit-button">
            <span v-if="isLoading">Carregando...</span>
            <span v-else>{{ isRegisterMode ? 'Registrar' : 'Entrar' }}</span>
          </button>
          <p class="link-group">
            <span @click="toggleMode" class="link">{{ isRegisterMode ? 'Já tem uma conta? Faça login' : 'Não tem uma conta? Registre-se' }}</span>
            <span @click="resetPassword" class="link">Esqueci a senha</span>
          </p>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script src="../scripts/login"></script>
  <style src="../styles/login.css"></style>
  