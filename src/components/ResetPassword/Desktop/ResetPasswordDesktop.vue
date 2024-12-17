<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores';
import { useRouter } from 'vue-router';

const router = useRouter();
const isSmallScreen = ref(false);
const confirmPassword = ref("");
const resetData = ref({
  reset_code: Array(6).fill(''),
  new_password: "",
});

const authStore = useAuthStore();

const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

const moveFocus = (event, currentIndex) => {
  const inputs = document.querySelectorAll('.code-input');
  if (event.target.value !== "" && currentIndex < inputs.length - 1) {
    inputs[currentIndex + 1].focus();
  } else if (event.target.value === "" && currentIndex > 0) {
    inputs[currentIndex - 1].focus();
  }
};
const resetPassword = async () => {
  const codeString = resetData.value.reset_code.join('');

  if (resetData.value.new_password !== confirmPassword.value) {
    alert("As senhas não coincidem.");
    return;
  }

  if (codeString.length !== 6) {
    alert("O código precisa ter 6 dígitos.");
    return;
  }

  const resetDataPayload = {
    reset_code: codeString,
    new_password: resetData.value.new_password
  };

  console.log("Payload enviado:", resetDataPayload);

  try {
    await authStore.ResetPasswordEmpresa({
      reset_code: codeString,
      new_password: resetData.value.new_password
    });

    router.push("/");
    alert("Senha alterada com sucesso!");
  } catch (error) {
    console.error("Erro ao resetar a senha. Tente novamente.", error);
  }
};
</script>

<template>
<div class="wrapContainer">
    <div class="FormTop">
      <img src="https://i.ibb.co/Qk43Z1V/icon-freelle-empresa.png" alt="Logo" class="logo-top" />
    </div>
    <div class="containerPrincipal">
      <div class="FormBot">
        <form @submit.prevent="resetPassword" class="wrapForm">
          <h4 class="Text">Digite o código que foi enviado no email</h4>
          <div class="code-container mt-3">
            <input
              v-for="(input, index) in 6"
              :key="index"
              type="text"
              maxlength="1"
              class="code-input"
              v-model="resetData.reset_code[index]"
              @input="moveFocus($event, index)"
            />
          </div>

          <div class="input-container">
            <input
              type="password"
              id="password"
              class="inputForm"
              v-model="resetData.new_password"
              required
            />
            <label for="password" :class="{'active': resetData.new_password !== ''}" class="labelForm">Crie sua nova senha...</label>
          </div>

          <div class="input-container">
            <input
              type="password"
              id="confirmPassword"
              class="marginForm inputForm"
              v-model="confirmPassword"
              required
            />
            <label for="confirmPassword"  :class="{'active': confirmPassword !== ''}"  class="labelForm">Confirme sua nova senha...</label>
          </div>

          <button type="submit" class="btnAtualizar mt-3">Atualizar</button>
          <p class="mt-4 FormP Pf">Protegido por reCAPTCHA - Privacidade | Condições</p>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  background: #00546B;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: 'Arial', sans-serif;
}

.wrapContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #00546B;
}

.containerPrincipal {
  width: 440px;
  background-color: white;
  padding: 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  text-align: center;
}

.logo-top {
  width: 80px;
  margin-bottom: 20px;
}

.input-container {
  position: relative;
  margin-top: 28px;
}

.inputForm {
  width: 100%;
  height: 50px;
  padding: 15px;
  border: 1px solid #00546B;
  outline: none;
  transition: all 0.3s;
}

.inputForm:focus + .labelForm,
.inputForm.active + .labelForm {
  top: -10px;
  font-size: 12px;
  color: #00546B;
}
.labelForm {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  transition: all 0.3s;
  pointer-events: none;
  font-size: 16px;
}

.labelForm.active {
  top: -10px;
  font-size: 12px;
}

.btnAtualizar {
  background-color: #00546B;
  color: white;
  border: none;
  width: 100%;
  height: 45px;
  margin-top: 15px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
}

.Pf {
  font-size: 12px;
  margin-top: 30px;
}

/* Estilos para os quadrados do código */
.code-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.code-input {
  width: 50px;
  height: 50px;
  font-size: 24px;
  text-align: center;
  border: 1px solid #00546B;
  border-radius: 5px;
  outline: none;
}

.code-input:focus {
  border-color: #000;
}

.separator {
  font-size: 24px;
  font-weight: bold;
  color: #00546B;
}

/* Estilos para telas pequenas */
@media (max-width: 768px) {
  .containerPrincipal {
    width: 90%;
    padding: 20px;
  }

  .btnLogin, .btnCriar {
    font-size: 16px;
    height: 40px;
  }

  .logo {
    width: 140px;
  }
}

@media (max-width: 576px) {
  .containerPrincipal {
    width: 80%;
    padding: 15px;
  }

  .inputForm {
    height: 40px;
    padding: 10px;
  }

  .btnLogin, .btnCriar {
    height: 35px;
    font-size: 14px;
  }
}
</style>
