<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  canditadosEmpresa: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <!-- Iterar sobre os candidatos de todos os projetos -->
    <div v-for="(projeto, index) in props.canditadosEmpresa" :key="index">

      <div v-for="(candidato, idx) in projeto.candidatos" :key="idx" class="candidate-box">
        <div class="box-img">
          <img :src="candidato.freelancer_user?.foto || 'https://via.placeholder.com/150'" alt="Imagem do candidato">
        </div>

        <div class="about">
          <h3>{{ candidato.freelancer_user ? candidato.freelancer_user.username : 'Nome do Usuário' }}</h3>
          <p>{{ candidato.freelancer_user ? candidato.freelancer_user.email : 'Email não disponível' }}</p>
          <p>{{ projeto.projeto || 'Cargo ou trabalho não informado' }}</p>
        </div>

        <div>
          <button @click="aceitarVaga(candidato)">Aceitar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  color: black;
  gap: 20px;
}

.project-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.candidate-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.box-img img {
  border-radius: 8px;
  width: 150px;
  height: 150px;
}

.about {
  flex-grow: 1;
  margin-left: 20px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
