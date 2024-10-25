import { ref, onMounted } from 'vue';

export function setupHeader() {
  const isMenuOpen = ref(false);
  const isMobile = ref(false);

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }

  const updateMobileStatus = () => {
    isMobile.value = window.innerWidth <= 768;
  };

  onMounted(() => {
    updateMobileStatus(); // Define o status inicial no cliente
    window.addEventListener('resize', updateMobileStatus);
  });

  return {
    isMenuOpen,
    isMobile,
    toggleMenu,
  };
}
