<template>
    <div class="draws-section">
        <h2 class="title">PRÓXIMOS SORTEIOS</h2>
        <div class="accordion">
            <div class="accordion-item" v-for="(draw, index) in draws" :key="draw._id">
                <div class="accordion-header" @click="toggle(index)">
                    <h3>{{ formatDate(draw.date) }}</h3>
                    <span class="indicator">{{ isOpen(index) ? '−' : '+' }}</span>
                </div>
                <div class="accordion-body" v-if="isOpen(index)">
                    <ul>
                        <li class="draw-item">
                            <div class="draw-info">
                                <strong>Data do Sorteio:</strong> {{ formatDate(draw.date) }} <br />
                                <strong>Prêmio:</strong> <span class="prize">{{ draw.prize }}</span>
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

const draws = ref([]);
const openIndex = ref(-1);

const toggle = (index) => {
    openIndex.value = openIndex.value === index ? -1 : index;
};

const isOpen = (index) => {
    return openIndex.value === index;
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

const fetchDraws = async () => {
    try {
        const response = await fetch('https://landing-page-back-end.onrender.com/api/winners/draws/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        draws.value = data; // Armazena a lista de sorteios
    } catch (error) {
        console.error('Erro ao buscar os próximos sorteios:', error);
    }
};

onMounted(() => {
    fetchDraws();
});
</script>

<style src="../styles/draws.css"></style>
