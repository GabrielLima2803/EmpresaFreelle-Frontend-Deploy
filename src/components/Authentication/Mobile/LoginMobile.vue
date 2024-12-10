<script setup>
import { HeaderMobile, FooterMobile } from '@/components';
</script>

<template>
    <HeaderMobile />
 <div class="wrapContainer">
    <div class="FormTop">
      <img src="https://i.ibb.co/Qk43Z1V/icon-freelle-empresa.png" alt="Logo" class="logo-top" />
    </div>
    <div class="containerPrincipal">
      <div class="FormBot">
        <form @submit.prevent="login" class="wrapForm">
          <h4 class="TextLeft">Olá!</h4>
          <p class="FormPLeft">Para continuar, digite seu e-mail</p>

          <div class="input-container">
            <input
              type="text"
              id="username"
              class="inputForm"
              v-model="username"
            />
            <label for="username" :class="{'active': username !== ''}" class="labelForm">E-mail ou Username</label>
          </div>
          <div class="input-container">
            <input
              type="password"
              id="password"
              class="marginForm inputForm"
              v-model="password"
            />
            <label for="password" :class="{'active': password !== ''}" class="labelForm">Senha</label>
          </div>

          <button type="button" style="margin-top: 10px" class="btnSenha">
            <router-link to="/forgot-password" class="btnSenha">Esqueci minha senha</router-link>
          </button>
          <button type="submit" class="btnLogin mt-3">Entrar</button>
          <router-link to="/cadastro">
            <button type="button" class="btnCriar mt-3">Criar conta</button>
          </router-link>
          <p class="mt-4 FormP Pf">Protegido por reCAPTCHA - Privacidade | Condições</p>

          <!-- <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p> -->
        </form>
      </div>
    </div>
  </div>
  <FooterMobile />
</template>

<style scoped>
body {
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

.TextLeft {
  font-weight: bold;
  text-align: left;
}

.FormPLeft {
  text-align: left;
}

.input-container {
  position: relative;
  margin-top: 30px;
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

.btnLogin, .btnCriar {
  width: 100%;
  height: 45px;
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
}

.btnLogin {
  background-color: #00546B;
  color: white;
  border: none;
}

.btnCriar {
  background-color: white;
  border: 2px solid #00546B;
  color: #00546B;
  transition: all 0.3s ease;
}

.btnCriar:hover {
  background-color: #00546B;
  color: white;
}

.btnSenha {
  margin-top: 20px;
  border: none;
  border-bottom: solid 1px #00546B;
  background-color: white;
  color: gray;
  font-size: 15px;
  text-decoration: none;
}

.btnSenha:hover {
  color: #00546B;
  transition: 0.7s;
}

.Pf {
  font-size: 12px;
  margin-top: 30px;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

.footer {
  background: #00546B;
}

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