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

<script src="../scripts/reqWinners"></script>

<style src="../styles/winners.css"></style>
