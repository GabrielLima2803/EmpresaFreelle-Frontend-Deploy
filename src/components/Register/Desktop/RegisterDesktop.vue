<script setup>

</script>

<template>
  <div class="wrapContainer">
    <img src="https://i.ibb.co/Qk43Z1V/icon-freelle-empresa.png" alt="Logo" class="logo-top" />

    <div class="containerPrincipal">
      <div class="FormBot">
        <form @submit.prevent="login" class="wrapForm">
          <h4 class="TextLeft">Olá, Empresa!</h4>
          <p class="FormPLeft">Faça o seu cadastro por aqui!</p>

          <div class="input-container">
            <input type="email" id="email" class="inputForm" v-model="email" :class="{'active': email}" required />
            <label for="email" class="labelForm">Digite seu email...</label>
          </div>

          <div class="input-container">
            <input type="text" id="cnpj" class="inputForm" v-model="cnpj" :class="{'active': cnpj}" required />
            <label for="cnpj" class="labelForm">Digite sua cnpj...</label>
          </div>
          
          <div class="input-container">
            <input type="text" id="username" class="inputForm" v-model="username" :class="{'active': username}" required />
            <label for="username" class="labelForm">Digite o nome da sua empresa...</label>
          </div>


          <div class="input-container">
            <input type="text" id="description" class="inputForm" v-model="description" :class="{'active': description}" required />
            <label for="description" class="labelForm">Faça uma breve descrição da sua empresa...</label>
          </div>

          <div class="input-container">
            <input type="password" id="password" class="inputForm" v-model="password" :class="{'active': password}" required />
            <label for="password" class="labelForm">Crie sua senha...</label>
          </div>

          <div class="input-container">
            <input type="password" id="password-confirm" class="inputForm" v-model="passwordConfirm" :class="{'active': passwordConfirm}" required />
            <label for="password-confirm" class="labelForm">Confirme sua senha...</label>
          </div>

          <router-link to="/cadastro">
            <button type="button" class="btnCriar">Criar conta</button>
          </router-link>
          <p class="FormP Pf">Protegido por reCAPTCHA - Privacidade | Condições</p>
        </form>
      </div>
    </div>
  </div>
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
  width: 550px;
  background-color: white;
  padding: 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.logo-top {
  width: 80px;
  margin-bottom: 20px;
}

.TextLeft,
.FormPLeft {
  text-align: left;
}

.input-container {
  position: relative;
  margin-top: 30px;
}

.inputForm {
  width: 100%;
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
  color: #666;
}

.btnCriar {
  width: 100%;
  height: 45px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  background-color: white;
  border: 2px solid #00546B;
  color: #00546B;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btnCriar:hover {
  background-color: #00546B;
  color: white;
}

.Pf {
  font-size: 12px;
  margin-top: 30px;
}

.footer {
  background: #00546B;
}

@media (max-width: 768px) {
  .containerPrincipal {
    width: 90%;
    padding: 20px;
  }

  .btnCriar {
    font-size: 16px;
    height: 40px;
  }

  .logo-top {
    width: 60px;
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

  .btnCriar {
    height: 35px;
    font-size: 14px;
  }
}
</style>