<script setup>
import { ref } from 'vue';
import { useEmpresaStore } from '@/stores/others/empresa';
import { useAuthStore } from '@/stores/auth/auth';
import { useRouter } from 'vue-router';

const empresaStore = useEmpresaStore();
const authStore = useAuthStore();
const router = useRouter();

const empresaData = ref({
  username: '',
  email: '',
  telefone: '',
  foto: '', // Armazena temporariamente o preview da foto
  biografia: '',
});

const fotoInput = ref(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      empresaData.value.foto = e.target.result; 
    };
    reader.readAsDataURL(file);
  }
};

const updateProfile = async () => {
  const formData = new FormData();
  
  // Adiciona os dados do formulário ao FormData
  formData.append('username', empresaData.value.username);
  formData.append('email', empresaData.value.email);
  formData.append('telefone', empresaData.value.telefone);
  formData.append('biografia', empresaData.value.biografia);

  // Adiciona a foto ao FormData apenas se um arquivo for selecionado
  if (fotoInput.value.files.length > 0) {
    formData.append('foto', fotoInput.value.files[0]); // Envia o arquivo diretamente
  }

  try {
    const authToken = authStore.token;
    // Envia o FormData com uma única requisição
    await empresaStore.updateMeUser(authToken, formData);
    router.push('/home'); // Redireciona para a página inicial após o sucesso
  } catch (error) {
    console.error('Erro ao atualizar o perfil:', error);
  }
};
</script>


<template>
  <div class="wrapContainer">
    <img src="https://i.ibb.co/Qk43Z1V/icon-freelle-empresa.png" alt="Logo" class="logo-top" />
    <div class="containerPrincipal">
      <p class="update-text">Precisa atualizar seu perfil? <router-link to="/home">Vá para seu perfil</router-link></p>

      <div class="profile-form-container">
        <div class="profile-section">
          <img :src="empresaData.foto" alt="Foto de perfil" class="profile-img" />
          <div class="input-container">
            <label for="foto">Escolha uma foto</label>
            <input type="file" id="foto" accept="image/*" ref="fotoInput" @change="handleFileChange" />
          </div>
          <div class="story-container">
            <textarea
              id="biografia"
              class="inputForm"
              v-model="empresaData.biografia"
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
  min-height: 60vh; 
  justify-content: space-between; 
}
.wrapForm {
  width: 65%;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Permite rolagem vertical */
  max-height: 400px; /* Define um limite para a altura, ajustável conforme necessário */
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
@media (max-width: 768px) {
  .containerPrincipal {
    padding: 20px;
    width: 80%;
    min-height: 70vh; /* Aumenta a altura mínima em telas menores */
  }

  .profile-form-container {
    flex-direction: column;
    gap: 0;
  }

  .profile-section, 
  .wrapForm {
    width: 100%;
  }

  .btn-submit {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .containerPrincipal {
    width: 100%; /* Assegura que o contêiner ocupa toda a largura da tela */
    padding: 15px; /* Menos padding para dar mais espaço útil */
    box-sizing: border-box; /* Inclui padding e borda no cálculo da largura total */
  }

  .profile-form-container {
    flex-direction: column; /* Alinha as seções em coluna */
    gap: 10px; /* Menos espaçamento entre os elementos */
    width: 100%; /* Garante que a largura seja 100% */
    overflow: hidden; /* Garante que nada ultrapasse a largura */
  }

  .profile-section,
  .wrapForm {
    width: 100%; /* Garantir que os elementos não excedam a largura do contêiner */
  }

  .profile-img {
    width: 120px; /* Tamanho reduzido da imagem para telas menores */
    height: 120px; /* Altura ajustada proporcionalmente */
  }

  .input-container {
    width: 100%;

  }

  .btn-submit {
    width: 100%;
    padding: 12px;
    font-size: 14px; /* Menor tamanho de texto em dispositivos menores */
    max-width: 100%; /* Evita que o botão ultrapasse os limites */
  }

  .update-text,
  .privacy {
    font-size: 12px;
    text-align: center; /* Centraliza o texto para visualização melhor em telas menores */
    margin-bottom: 10px;
  }

  .story-container {
    width: 100%; /* Garantir que o container da descrição não ultrapasse a largura */
  }

  textarea.inputForm {
    width: 100%; /* Garante que a área de texto ocupe toda a largura disponível */
    resize: none; /* Impede o redimensionamento */
    height: 80px; /* Ajuste de altura */
  }
}

@media (max-width: 480px) {
  .containerPrincipal {
    width: 100%;
    padding: 10px;
    max-width: 100%; /* Garantir que o contêiner ocupe 100% da largura */
  }

  .logo-top {
    width: 50px;
    margin-bottom: 10px;
  }

  .profile-img {
    width: 100px;
    height: 100px;
  }

  .btn-submit {
    font-size: 14px;
    padding: 10px;
  }

  .input-container label {
    font-size: 14px;
    text-align: center;
  }

  textarea.inputForm {
    width: 100%; /* Área de texto ocupa toda a largura */
    height: 80px; /* Reduz a altura */
  }

  .update-text {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .privacy {
    font-size: 10px;
  }
}

</style>
