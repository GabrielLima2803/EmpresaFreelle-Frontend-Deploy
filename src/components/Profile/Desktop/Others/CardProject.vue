<script setup>
import { useProjetoStore } from '@/stores/others/projeto';
const projetoStore = useProjetoStore();

const deleteProject = async () => {
  try {
    await projetoStore.deleteProjeto(props.Projects.id);
    alert('Projeto excluído com sucesso!');
  window.location.reload();

  } catch (error) {
    console.error('Erro ao excluir o projeto:', error);
  }
};
const props = defineProps({
  Projects: {
    type: Object,
    required: true,
  },
});
const defaultImage = "https://via.placeholder.com/150"


const calculateVagas = (candidatos, maxCandidates) => {
  const currentCandidates = candidatos.length;
  return `${currentCandidates}/${maxCandidates}`;
};

const vagas = calculateVagas(props.Projects.candidatos, props.Projects.max_candidates);

const formatMonth = (month) => {
  const months = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC",
  ];
  return months[month - 1];
};

const formatDateRange = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startFormatted = `${formatMonth(start.getMonth() + 1)} ${start.getDate()}`;
  const endFormatted = `${end.getDate()} ${formatMonth(end.getMonth() + 1)}`;

  return `${startFormatted} / ${endFormatted}`;
};

const formattedDateRange = formatDateRange(
  props.Projects.data_publicada,
  props.Projects.prazo_entrega
);
</script>

<template>
  <div v-if="!props.Projects.isExpired" class="card">
    <div class="box-image">
      <img :src="props.Projects.foto?.url || defaultImage" :alt="props.Projects.foto?.description || 'Imagem do projeto'" />
    </div>
    <div class="box-information">
      <div class="header">
        <h2 class="title">{{ props.Projects.titulo }}</h2>
        <div class="wrap">
          <p class="details">{{ formattedDateRange }} | {{ props.Projects.categoria[0].nome }}</p>
          <p class="details">
            Vagas: {{ vagas }} | Salário: R${{ props.Projects.orcamento }}
          </p>
        </div>
      </div>
      <div class="description">
        <p>{{ props.Projects.descricao }}</p>
        <div class="wrap-button">
          <button class="delete-button" @click="deleteProject">Excluir</button>
        </div>
      </div>
    </div>
  </div>

  <div v-if="props.Projects.isExpired" class="card expired">
    <div class="box-image">
      <img src="https://via.placeholder.com/150" alt="Imagem da vaga" />
    </div>
    <div class="box-information">
      <div class="header">
        <h2 class="title">{{ props.Projects.titulo }}</h2>
        <div class="wrap">
          <p class="details">{{ formattedDateRange }} | {{ props.Projects.categoria[0].nome }}</p>
          <p class="details">
            Vagas: {{ vagas }} | Salário: R${{ props.Projects.orcamento }}
          </p>
        </div>
      </div>
      <div class="description">
        <p>{{ props.Projects.descricao }}</p>
        <div class="wrap-button">
          <button class="emprego-ine">Emprego Inexistente</button>
          <!-- <p class="emprego-ine">Taxa de 50%</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 25px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-width: 1200px;
  min-width: 1200px;
}

.expired{
  border: #6B0000 solid 1px;
  background-color: rgba(110, 0, 0, 0.2);
}

.box-image{
 padding-right: 2em;

}
.box-image img {
  width: 250px;
  height: 210px;
  border-radius: 8px;
  object-fit: cover;
}
.image-box:hover {
  background-color: #f9f9f9;
}
.emprego-ine{
  background-color: rgba(110, 0, 0, 0);
  color: #6B0000;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  cursor: auto;
  width: 210px;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
.file-input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.box-information {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}
.wrap{
    display: flex;
    gap: 10px;
}
.header .title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}

.header .details {
  font-size: 12px;
  color: #777;
  margin-bottom: 8px;
}

.vagas-salario {
  font-size: 12px;
  color: #444;
  margin-bottom: 12px;
}

.description p {
  font-size: 16px;
  color: #555;
  margin-bottom: 12px;
}

.delete-button {
  background-color: white;
  color: #00546B;
  position: relative;
  bottom: -3.5em;
  padding: 8px 12px;
  border: 1px solid #a3a2a2;
  cursor: pointer;
  font-size: 14px;
  width: 150px;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
.delete-button:hover {
  background-color: #00546B;
  color: white;
  border-color: #00546B;
}

</style>
