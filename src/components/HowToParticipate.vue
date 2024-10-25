<template>
  <div class="how-to-participate" id="howToParticipate">
      <h2 class="title">COMO PARTICIPAR</h2>
      <div class="steps-container">
          <div class="step" v-for="step in steps" :key="step.id">
              <div class="image-box">
                  <img :src="step.image" :alt="step.alt" />
              </div>
              <div class="card">
                  <h4>{{ step.title }}</h4>
                  <p>{{ step.description }}</p>
              </div>
          </div>
      </div>
      <button class="register-button" aria-label="Botão para cadastrar-se">CADASTRAR-SE</button>
  </div>
</template>

<script setup>
const steps = [
{ id: 1, image: "https://cdn.icon-icons.com/icons2/2248/PNG/512/account_circle_icon_137996.png", alt: "Passo 1", title: "Passo 1", description: "Acesse nosso site e crie uma conta." },
{ id: 2, image: "https://cdn-icons-png.flaticon.com/512/64/64484.png", alt: "Passo 2", title: "Passo 2", description: "Faça login na sua conta." },
{ id: 3, image: "https://prints.ultracoloringpages.com/49bca2e17d55900152aeb3052c2d6d7e.png", alt: "Passo 3", title: "Passo 3", description: "Escolha o sorteio que deseja participar." },
{ id: 4, image: "https://cdn-icons-png.flaticon.com/512/154/154346.png", alt: "Passo 4", title: "Passo 4", description: "Clique no botão 'CADASTRAR-SE'." }
];
</script>

<style src="../styles/HowToParticipate.css"></style>