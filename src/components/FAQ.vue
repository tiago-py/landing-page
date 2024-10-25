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
    { question: 'Pergunta 1?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { question: 'Pergunta 2?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { question: 'Pergunta 3?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { question: 'Pergunta 4?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]);

const openIndex = ref(-1);

const toggle = (index) => {
    openIndex.value = openIndex.value === index ? -1 : index;
};

const isOpen = (index) => {
    return openIndex.value === index;
};
</script>

<style src="../../styles/faq.css"></style>