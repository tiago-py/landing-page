<template>
    <div class="prizes-section" id="prizes">
        <h2 class="title">PRÊMIOS</h2>
        <div class="carousel">
            <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }">
                <div class="carousel-item" v-for="(item, index) in items" :key="index">
                    <img :src="item.img" :alt="`Prêmio ${index + 1}`" />
                    <p>{{ item.description }}</p>
                </div>
            </div>
            <button class="carousel-button left" @click="prevSlide">❮</button>
            <button class="carousel-button right" @click="nextSlide">❯</button>
            <button class="register-button">CADASTRAR-SE</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentIndex = ref(0);
const items = ref([
    { img: 'https://openui.fly.dev/openui/400x400.svg?text=🖼️', description: 'Prêmio 1: Descrição do prêmio.' },
    { img: 'https://openui.fly.dev/openui/400x400.svg?text=🖼️', description: 'Prêmio 2: Descrição do prêmio.' },
    { img: 'https://openui.fly.dev/openui/400x400.svg?text=🖼️', description: 'Prêmio 3: Descrição do prêmio.' },
    { img: 'https://openui.fly.dev/openui/400x400.svg?text=🖼️', description: 'Prêmio 4: Descrição do prêmio.' },
    { img: 'https://openui.fly.dev/openui/400x400.svg?text=🖼️', description: 'Prêmio 5: Descrição do prêmio.' },
    { img: 'https://openui.fly.dev/openui/400x400.svg?text=🖼️', description: 'Prêmio 6: Descrição do prêmio.' },
]);

const visibleItems = ref(3);

const updateVisibleItems = () => {
    if (window.innerWidth < 768) {
        visibleItems.value = 1;
    } else if (window.innerWidth < 1024) {
        visibleItems.value = 2;
    } else {
        visibleItems.value = 2; 
    }
};

const nextSlide = () => {
    const totalSlides = Math.ceil(items.value.length / visibleItems.value);
    if (currentIndex.value < totalSlides - 1) {
        currentIndex.value++;
    } else {
        currentIndex.value = 0;
    }
};

const prevSlide = () => {
    const totalSlides = Math.ceil(items.value.length / visibleItems.value);
    if (currentIndex.value > 0) {
        currentIndex.value--;
    } else {
        currentIndex.value = totalSlides - 1;
    }
};

// Adicionar listener de redimensionamento
onMounted(() => {
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
});

// Remover listener de redimensionamento quando o componente for destruído
onUnmounted(() => {
    window.removeEventListener('resize', updateVisibleItems);
});
</script>

<style src="../../styles/prizes.css"></style>