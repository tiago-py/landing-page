<template>
    <div class="winners-section">
        <h2 class="title">GANHADORES</h2>
        <div class="accordion">
            <div class="accordion-item" v-for="(winner, index) in winners" :key="winner._id">
                <div class="accordion-header" @click="toggle(index)">
                    <h3>{{ formatDate(winner.date) }}</h3>
                    <span class="indicator">{{ isOpen(index) ? '−' : '+' }}</span>
                </div>
                <div class="accordion-body" v-if="isOpen(index)">
                    <ul>
                        <li class="winner-item">
                            <div class="winner-info">
                                <strong>Nome:</strong> {{ winner.name }} <br />
                                <strong>CPF:</strong> {{ maskCpf(winner.cpf) }} <br />
                                <strong>Número da Sorte:</strong> {{ formatLuckyNumber(winner.lucky_number) }} <br />
                                <strong>Prêmio Ganho:</strong> <span class="prize">{{ winner.prize }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const winners = ref([]); // Renomeado para 'winners' para melhor compreensão
const openIndex = ref(-1);

const toggle = (index) => {
    openIndex.value = openIndex.value === index ? -1 : index;
};

const isOpen = (index) => {
    return openIndex.value === index;
};

// Função para mascarar o CPF
const maskCpf = (cpf) => {
    if (!cpf) return 'CPF não disponível'; // Verifica se o CPF é definido
    return cpf.replace(/^(\d{3})\d{3}\d{3}(\d{2})$/, '$1.***.***-$2');
};

// Função para formatar o número da sorte
const formatLuckyNumber = (luckyNumber) => {
    if (luckyNumber === undefined || luckyNumber === null) return 'Número da sorte não disponível'; // Verifica se o luckyNumber é válido
    return luckyNumber.toString().padStart(6, '0').replace(/(\d{3})(\d{3})/, '$1 - $2');
};

// Função para formatar a data
const formatDate = (date) => {
    const parsedDate = Date.parse(date);
    if (isNaN(parsedDate)) {
        return 'Data inválida'; // Retorna mensagem padrão se a data não for válida
    }
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(parsedDate).toLocaleDateString('pt-BR', options);
};

const fetchWinners = async () => {
    try {
        const response = await fetch('https://landing-page-back-end.onrender.com/api/winners/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        winners.value = data; // Armazena a lista de ganhadores
    } catch (error) {
        console.error('Erro ao buscar os ganhadores:', error);
    }
};

onMounted(() => {
    fetchWinners();
});
</script>

<style src="../styles/winners.css"></style>
