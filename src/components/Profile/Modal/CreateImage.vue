<script setup>
import { onMounted, ref } from "vue";
import { usePortifolioStore } from "@/stores/others/portifolio";
import { useRouter } from "vue-router";
import { useCategoriaStore } from "@/stores/others/categoria";


const categoriaStore = useCategoriaStore();
const router = useRouter();
const portifolioStore = usePortifolioStore();

const imageFile = ref(null);
const categoriaSelecionada = ref("");

const handleDrop = (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) {
    imageFile.value = file;
  } else {
    alert("Por favor, arraste apenas imagens.");
  }
};

const handleDragOver = (event) => {
  event.preventDefault();
};

const handleInputChange = (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    imageFile.value = file;
  } else {
    alert("Por favor, selecione apenas imagens.");
  }
};

const submitPortifolio = async () => {
  if (!imageFile.value || !categoriaSelecionada.value) {
    alert("Por favor, selecione uma imagem e uma categoria.");
    return;
  }

  const formData = new FormData();
  formData.append("image", imageFile.value);
  formData.append("categoria", categoriaSelecionada.value);

  try {
    await portifolioStore.postImagePortifolio(formData);
    alert("Projeto adicionado com sucesso!");
    router.push("/home")
  } catch (error) {
    console.error("Erro ao enviar o portfólio:", error);
    alert("Erro ao adicionar o projeto ao portfólio.");
  }
};

onMounted(async () => {
  await categoriaStore.getAllCategorias();
});
</script>

<template>
  <div class="wrapContainer">
    <div class="containerPrincipal">
      <div class="title-top">
        <p>
          Precisa adicionar um projeto ao seu portfólio?
          <router-link to="/home" class="link">Ir para os meus projetos</router-link>
        </p>
        <div class="border"></div>
      </div>
      <div class="box-bottom">
        <div class="image-box" @dragover="handleDragOver" @drop="handleDrop">
          <p v-if="!imageFile">Imagem do projeto +</p>
          <p v-else class="image-select">Imagem carregada: {{ imageFile.name }}</p>
          <input
            type="file"
            accept="image/*"
            class="file-input"
            @change="handleInputChange"
          />
        </div>

        <!-- Selecionar Categoria -->
        <div class="box-category">
          <select
            v-model="categoriaSelecionada"
            class="category-select"
          >
            <option value="">Categoria</option>
            <option
              v-for="categoria in categoriaStore.categorias"
              :key="categoria.id"
              :value="categoria.id"
            >
              {{ categoria.nome }}
            </option>
          </select>
        </div>

        <!-- Botão Submit -->
        <button class="btn-submit" @click="submitPortifolio">
          Adicionar Projeto
        </button>

        <p class="recaptcha-text">
          Protegido por reCAPTCHA -
          <a href="#" class="link">Privacidade</a> |
          <a href="#" class="link">Condições</a>
        </p>
      </div>
    </div>
  </div>
</template>


<style scoped>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #00546b;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.wrapContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #00546b;
}

.containerPrincipal {
  background-color: #fff;
  width: 90%;
  max-width: 800px;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.title-top p {
  font-size: 16px;
  color: #333;
  margin: 0;
}

.title-top .border {
  margin: 15px auto 30px;
  width: 100%;
  height: 1px;
  background-color: #bababa;
}

.link {
  color: #00546b;
  text-decoration: none;
  font-weight: bold;
}

.image-box {
  width: 100%;
  height: 300px;
  border: 2px solid #B4B4B4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bababa;
  font-size: 16px;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
}

.image-box:hover {
  background-color: #f9f9f9;
}

.file-input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.category-select,
.btn-submit {
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-bottom: 20px;
}

.category-select {
  padding: 0 10px;
  height: 40px;
  background-color: white;
  outline: none;
  margin-top: 1vh;
}

.btn-submit {
  background-color: #00546b;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  margin-top: 4vh;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #004050;
}

.recaptcha-text {
  font-size: 12px;
  color: #666;
  margin-top: 20px;
}

.recaptcha-text .link {
  color: #00546b;
  font-weight: normal;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .containerPrincipal {
    padding: 20px;
  }

  .image-box {
    height: 200px;
    font-size: 14px;
  }

  .btn-submit,
  .category-select {
    font-size: 14px;
    height: 40px;
  }

  .title-top p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .image-box {
    height: 150px;
    font-size: 12px;
  }

  .btn-submit,
  .category-select {
    font-size: 12px;
    height: 35px;
  }

  .title-top p {
    font-size: 12px;
  }
}
</style>
