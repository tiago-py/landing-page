<template>
    <div class="faq-section" id="faq">
        <h2 class="title">PERGUNTAS FREQUENTES</h2>
        <div class="accordion">
            <div class="accordion-item" v-for="(item, index) in faqs" :key="index">
                <div class="accordion-header" @click="toggle(index)">
                    <h3>{{ item.question }}</h3>
                    <span class="indicator">{{ isOpen(index) ? '−' : '+' }}</span>
                </div>
                <div class="accordion-body" v-if="isOpen(index)">
                    <p>{{ item.answer }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const faqs = ref([
    { 
        question: 'Como posso participar do sorteio?', 
        answer: 'Para participar, você deve se cadastrar em nosso site e seguir as instruções fornecidas na página do sorteio.' 
    },
    { 
        question: 'Preciso comprar algo para participar do sorteio?', 
        answer: 'Sim, para participar você precisa ter ao menos 200 reais em compras na nossa loja.' 
    },
    { 
        question: 'Como serei notificado se ganhar?', 
        answer: 'Se você for um dos vencedores, receberá uma notificação por e-mail e também será anunciado nas nossas redes sociais.' 
    },
    { 
        question: 'Posso participar mais de uma vez?', 
        answer: 'Não, o sorteio é limitado para apenas um prêmio por pessoa.' 
    },
    { 
        question: 'O que fazer se eu tiver problemas para me cadastrar?', 
        answer: 'Se você tiver problemas, entre em contato com nosso suporte ao cliente através do e-mail [e-mail de suporte].' 
    },
    { 
        question: 'Os dados pessoais que eu fornecer estarão seguros?', 
        answer: 'Sim, garantimos que todas as informações pessoais estarão protegidas e serão usadas apenas para fins de cadastro no sorteio.' 
    }
]);


const openIndex = ref(-1);

const toggle = (index) => {
    openIndex.value = openIndex.value === index ? -1 : index;
};

const isOpen = (index) => {
    return openIndex.value === index;
};
</script>

<style src="../styles/faq.css"></style>