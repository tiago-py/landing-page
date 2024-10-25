<template>
    <div class="winners-section">
        <h2 class="title">GANHADORES</h2>
        <div class="accordion">
            <div class="accordion-item" v-for="(drawing, index) in drawings" :key="index">
                <div class="accordion-header" @click="toggle(index)">
                    <h3>{{ drawing.date }}</h3>
                    <span class="indicator">{{ isOpen(index) ? '−' : '+' }}</span>
                </div>
                <div class="accordion-body" v-if="isOpen(index)">
                    <ul>
                        <li v-for="(winner, winnerIndex) in drawing.winners" :key="winnerIndex" class="winner-item">
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

const drawings = ref([]);
const openIndex = ref(-1);

const toggle = (index) => {
    openIndex.value = openIndex.value === index ? -1 : index;
};

const isOpen = (index) => {
    return openIndex.value === index;
};

// Função para mascarar o CPF
const maskCpf = (cpf) => {
    return cpf.replace(/^(\d{3})\d{3}\d{3}(\d{2})$/, '$1.***.***-$2');
};

// Função para formatar o número da sorte
const formatLuckyNumber = (luckyNumber) => {
    return luckyNumber.toString().padStart(6, '0').replace(/(\d{3})(\d{3})/, '$1 - $2');
};

const fetchWinners = async () => {
    try {
        const response = await fetch('https://landing-page-back-end.onrender.com/api/winners');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        drawings.value = data;
    } catch (error) {
        console.error('Erro ao buscar os ganhadores:', error);
    }
};

onMounted(() => {
    fetchWinners();
});
</script>

<style src="../../styles/winners.css"></style>
