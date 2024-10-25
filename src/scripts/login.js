import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { z } from 'zod';

const loginSchema = z.object({
  username: z.string().email("Email inválido").min(1, "Email é obrigatório"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

const registerSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  cpf: z.string().min(1, "CPF é obrigatório"),
  username: z.string().email("Email inválido").min(1, "Email é obrigatório"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export default {
  setup() {
    const router = useRouter();
    const form = ref({
      name: '',
      cpf: '',
      username: '',
      password: '',
    });
    const errors = ref({});
    const errorMessage = ref(null);
    const isLoading = ref(false);
    const isRegisterMode = ref(false);

    const greeting = computed(() => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) return "Bom dia! ☀️";
      if (hour >= 12 && hour < 18) return "Boa tarde! 🌇";
      return "Boa noite! 🌃";
    });

    async function onSubmit() {
      isLoading.value = true;
      errors.value = {};

      try {
        const schema = isRegisterMode.value ? registerSchema : loginSchema;
        schema.parse(form.value);

        const { username, password, name, cpf } = form.value;
        const url = isRegisterMode.value ? 'https://landing-page-back-end.onrender.com/api/register' : 'https://landing-page-back-end.onrender.com/api/login';
        const body = isRegisterMode.value ? { username, password, name, cpf } : { username, password };

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          throw new Error('Falha ao conectar com a API');
        }

        const data = await response.json();

        if (isRegisterMode.value) {
          alert('Registro realizado com sucesso!');
          // Opcional: redirecionar ou fazer outra ação após o registro
        } else {
          // Aqui você pode armazenar o token ou os dados do usuário conforme necessário
          router.push('/');
        }
      } catch (error) {
        if (error.errors) {
          error.errors.forEach(e => {
            errors.value[e.path[0]] = e.message;
          });
        } else {
          errorMessage.value = error.message || "Credenciais inválidas. Tente novamente.";
        }
      } finally {
        isLoading.value = false;
      }
    }

    function toggleMode() {
      isRegisterMode.value = !isRegisterMode.value;
      form.value.name = '';
      form.value.cpf = '';
      form.value.username = '';
      form.value.password = '';
      errors.value = {};
      errorMessage.value = null;
    }

    function resetPassword() {
      // Lógica para redefinição de senha (não implementada aqui)
      alert('Redefinição de senha solicitada!');
    }

    return {
      form,
      errors,
      errorMessage,
      isLoading,
      onSubmit,
      greeting,
      toggleMode,
      resetPassword,
      isRegisterMode,
    };
  },
};
