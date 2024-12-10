<script setup>
const empresaData = {
  username: 'empresa',
  email: 'empresa@gmail.com',
  telefone: '199993',
  foto: 'https://i.ibb.co/Qk43Z1V/icon-freelle-empresa.png',
  descricao: 'Descriao de comentarios',
}
</script>

<template>
  <div class="wrapContainer">
    <img :src="empresaData.foto" alt="Logo" class="logo-top" />
    <div class="containerPrincipal">
      <p class="update-text">Precisa atualizar seu perfil? <router-link to="/home">Vá para seu perfil</router-link></p>

      <div class="profile-form-container">
        <div class="profile-section">
          <img :src="empresaData.foto" alt="Foto de perfil" class="profile-img" />
          <div class="input-container">
            <label for="foto">Escolha uma foto</label>
            <input type="file" id="foto" accept="image/*" />
          </div>
          <div class="story-container">
  <textarea
    id="descricao"
    class="inputForm"
    v-model="empresaData.descricao"
    rows="4"
  />
</div>
        </div>

        <form @submit.prevent="updateProfile" class="wrapForm">
          <div class="input-container">
            <label for="name">Nome de Usuário</label>
            <input type="text" id="name" class="inputForm" v-model="empresaData.username" />
          </div>

          <div class="input-container">
            <label for="email">Email</label>
            <input type="email" id="email" class="inputForm" v-model="empresaData.email" />
          </div>

          <div class="input-container">
            <label for="telefone">Telefone</label>
            <input type="text" id="telefone" class="inputForm" v-model="empresaData.telefone" />
          </div>

          <button type="submit" class="btn-submit">CONFIRMAR ALTERAÇÕES</button>
        </form>
      </div>

      <p class="privacy">
        Protegido por reCAPTCHA - <a href="#">Privacidade</a> | <a href="#">Condições</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #00546b;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-family: 'Arial', sans-serif;
}

.wrapContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  height: 100vh;
  background-color: #00546b;
}

.logo-top {
  width: 80px;
  margin-bottom: 20px;
}

.containerPrincipal {
  width: 80%;
  max-width: 800px;
  background-color: white;
  padding: 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.update-text {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.update-text a {
  color: #00546b;
  text-decoration: none;
  font-weight: bold;
}

.profile-form-container {
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
}

.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  border: 2px solid #ccc;
}

.story-container {
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.wrapForm {
  width: 65%;
  display: flex;
  flex-direction: column;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
}

.inputForm {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  outline: none;
  transition: all 0.3s;
  margin-top: 5px;
}

textarea.inputForm {
  height: 100px;
  resize: none;
  border: 1px solid #ccc;
  padding: 12px;
  outline: none;
  box-sizing: border-box;
}

textarea.inputForm:focus {
  border-color: #00546b;
  box-shadow: 0 0 5px rgba(0, 84, 107, 0.5);
}

.inputForm:focus {
  border-color: #00546b;
}

.btn-submit {
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin: 25px auto;
  background-color: #00546b;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #003f3a;
}

.privacy {
  font-size: 12px;
  color: #666;
  margin-top: 30px;
}

.privacy a {
  color: #00546b;
  text-decoration: none;
}

.footer {
  background: #00546b;
  width: 100%;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  border: 2px solid #ccc;
}

.input-container input[type='file'] {
  display: none;
}

.input-container label {
  cursor: pointer;
  color: #00546b;
  font-weight: bold;
  margin-top: 10px;
}

.input-container input[type='file']:focus + label {
  color: #003f3a;
}

</style>
