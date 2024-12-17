<script setup>
import { defineProps } from 'vue';
import { useProjetoStore } from '@/stores/others/projeto';
import { useAuthStore } from '@/stores/auth/auth';

const props = defineProps({
  canditadosEmpresa: {
    type: Array,
    required: true,
  },
});

const projetoStore = useProjetoStore();
const authStore = useAuthStore();

// Função para aceitar a vaga de um candidato
const aceitarVaga = async (projetoId, application_id) => {
  console.log("Projeto ID:", projetoId);
  console.log("Application ID:", application_id);
  const token = authStore.token;
  try {
    const response = await projetoStore.selectCandidato(projetoId, token, application_id);
  window.location.reload();
    console.log('Candidato selecionado:', response);
  } catch (error) {
    console.error('Erro ao aceitar o candidato:', error);
  }
};
</script>

<template>
  <div class="container">
    <div v-for="(projeto, index) in props.canditadosEmpresa" :key="index">

      <div v-for="(candidato, idx) in projeto.candidatos.filter(c => c.status === 'Pendente')" :key="idx" class="candidate-box">
        <div class="box-img">
          <img :src="candidato.freelancer_user?.foto || 'https://via.placeholder.com/150'" alt="Imagem do candidato">
        </div>

        <div class="about">
          <h3>{{ candidato.freelancer_user ? candidato.freelancer_user.username : 'Nome do Usuário' }}</h3>
          <p>{{ candidato.freelancer_user ? candidato.freelancer_user.email : 'Email não disponível' }}</p>
          <p>{{ projeto.projeto || 'Cargo ou trabalho não informado' }}</p>
        </div>

        <div>
          <button @click="aceitarVaga(projeto.id_projeto, candidato.id)">Aceitar</button>
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
