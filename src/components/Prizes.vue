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
    { img: 'https://preview.redd.it/windows-11-black-abstract-bloom-1920x1080-v0-vfj65y1spo2b1.jpg?auto=webp&s=f6f92b772b1e0f3cea89857306d1e11b0855960a', description: 'PlayStation 5' },
    { img: 'https://preview.redd.it/windows-11-black-abstract-bloom-1920x1080-v0-vfj65y1spo2b1.jpg?auto=webp&s=f6f92b772b1e0f3cea89857306d1e11b0855960a', description: 'Xbox Series S' },
    { img: 'https://preview.redd.it/windows-11-black-abstract-bloom-1920x1080-v0-vfj65y1spo2b1.jpg?auto=webp&s=f6f92b772b1e0f3cea89857306d1e11b0855960a', description: 'Computador gamer de última geração' },
    { img: 'https://preview.redd.it/windows-11-black-abstract-bloom-1920x1080-v0-vfj65y1spo2b1.jpg?auto=webp&s=f6f92b772b1e0f3cea89857306d1e11b0855960a', description: 'Controles' },
    { img: 'https://preview.redd.it/windows-11-black-abstract-bloom-1920x1080-v0-vfj65y1spo2b1.jpg?auto=webp&s=f6f92b772b1e0f3cea89857306d1e11b0855960a', description: 'Vale Presentes na Kabum' },
    { img: 'https://preview.redd.it/windows-11-black-abstract-bloom-1920x1080-v0-vfj65y1spo2b1.jpg?auto=webp&s=f6f92b772b1e0f3cea89857306d1e11b0855960a', description: 'Teclado Gamer' },
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

<style src="../styles/prizes.css"></style>