<script setup>
import { onMounted, ref } from 'vue';
import { useProjetoStore } from '@/stores/others/projeto';
import { useCategoriaStore } from "@/stores/others/categoria";


const categoriaStore = useCategoriaStore();
const projetoStore = useProjetoStore();


const titulo = ref('');
const descricao = ref('');
const dataLimite = ref('');
const categoria = ref('');
const vagas = ref(null);
const salario = ref(null);
const imageFile = ref(null);

const handleInputChange = (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    imageFile.value = file;
  } else {
    alert('Por favor, selecione apenas imagens.');
  }
};

const submitForm = async () => {
  const formData = new FormData();
  formData.append('titulo', titulo.value);
  formData.append('descricao', descricao.value);
  formData.append('prazo_entrega', dataLimite.value);
  formData.append('categoria', categoria.value);
  formData.append('max_candidates', vagas.value);
  formData.append('orcamento', salario.value);
  if (imageFile.value) {
    formData.append('image_project', imageFile.value);
  }
  console.log("Form data enviado:", formData);
  console.log("Categoria:", categoria.value);
  console.log("Foto", imageFile.value);
  await projetoStore.postProjeto(formData);
  window.location.reload();

  titulo.value = '';
  descricao.value = '';
  dataLimite.value = '';
  categoria.value = '';
  vagas.value = null;
  salario.value = null;
  imageFile.value = null;
};
onMounted(async () => {
  await categoriaStore.getAllCategorias();
  console.log(categoriaStore.categorias);
});
</script>


<template>
  <div class="wrap">
    <h2>Precisa criar um projeto?</h2>
    <div class="form-container">
      <form action="" @submit.prevent="submitForm" class="container-principal">
        <div class="form-wrapper">
          <div class="form-group">
            <div class="image-box">
              <p v-if="!imageFile">Imagem do projeto +</p>
              <p v-else class="image-select">Imagem carregada: {{ imageFile.name }}</p>
              <input
                type="file"
                accept="image/*"
                class="file-input"
                @change="handleInputChange"
              />
            </div>
          </div>

          <div class="form-fields">
            <div class="form-group">
              <label for="titulo">Título</label>
              <input v-model="titulo" id="titulo" type="text" placeholder="Digite seu título..." />
            </div>

            <div class="form-group">
              <label for="descricao">Descrição</label>
              <textarea
                v-model="descricao"
                id="descricao"
                placeholder="Descreva seu projeto..."
              ></textarea>
            </div>

            <div class="form-group">
              <label for="data-limite">Data Limite</label>
              <input v-model="dataLimite" id="data-limite" type="date" />
            </div>

            <div class="form-group">
              <label for="categoria">Categoria</label>
              <select v-model="categoria" id="categoria">
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

            <div class="form-group">
              <label for="vagas">Total de vagas</label>
              <input
                v-model="vagas"
                id="vagas"
                type="number"
                placeholder="Digite o total de vagas"
              />
            </div>

            <div class="form-group">
              <label for="salario">Salário</label>
              <input
                v-model="salario"
                id="salario"
                type="number"
                placeholder="Digite o salário"
              />
            </div>
          </div>
        </div>
        <button class="submit-button" type="submit">ABRIR VAGAS</button>
      </form>
    </div>
  </div>
</template>


<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
.wrap {
  margin-top: 60px;
}
.container-principal {
  width: 100%;
  max-width: 1200px;
}

.form-wrapper {
  display: flex;
  gap: 20px; /* Espaçamento entre as colunas */
  flex-wrap: wrap; /* Garante que o layout se ajuste em telas menores */
}

.image-box {
  flex: 2; /* Aumentando o valor de flex para a imagem */
  height: 467px;
  border: 2px solid #B4B4B4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bababa;
  font-size: 16px;
  position: relative;
  cursor: pointer;
  max-width: 600px; /* Tamanho máximo da coluna de imagem */
}

.file-input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.form-fields {
  flex: 1; /* Mantendo os campos com uma proporção menor */
  display: flex;
  flex-direction: column;
  gap: 16px; /* Espaçamento entre os campos */
}

h2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
}

input,
textarea,
select {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

textarea {
  resize: none;
  height: 80px;
}

.submit-button {
  width: 100%;
  padding: 12px 0;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #00546B;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 15px;
}

.submit-button:hover {
  background-color: #004050;
}
</style>
