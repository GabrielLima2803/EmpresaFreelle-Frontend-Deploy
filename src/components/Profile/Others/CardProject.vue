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

const defaultImage = "https://via.placeholder.com/150";

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
  <div v-if="!props.Projects.isExpired && !props.Projects.isClosed" class="card andamento">
    <div class="box-image">
      <img :src="props.Projects.foto?.url || defaultImage" :alt="props.Projects.foto?.description || 'Imagem do projeto'" />
    </div>
    <div class="box-information">
      <div class="header">
        <h2 class="title">{{ props.Projects.titulo }}</h2>
        <div class="wrap">
          <p class="details">{{ formattedDateRange }} | {{ props.Projects.categoria[0].nome }}</p>
          <p class="details">Vagas: {{ vagas }} | Salário: R${{ props.Projects.orcamento }}</p>
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

  <div v-if="props.Projects.isExpired || props.Projects.isClosed" class="card expired">
    <div class="box-image">
      <img :src="props.Projects.foto?.url || defaultImage" :alt="props.Projects.foto?.description || 'Imagem do projeto'" />
    </div>
    <div class="box-information">
      <div class="header">
        <h2 class="title">{{ props.Projects.titulo }}</h2>
        <div class="wrap">
          <p class="details">{{ formattedDateRange }} | {{ props.Projects.categoria[0].nome }}</p>
          <p class="details">Vagas: {{ vagas }} | Salário: R${{ props.Projects.orcamento }}</p>
        </div>
      </div>
      <div class="description">
        <p>{{ props.Projects.descricao }}</p>
        <div class="wrap-button">
          <button class="emprego-ine">Emprego Inexistente</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  gap: 16px;
  padding: 20px;
  border-radius: 14px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 900px;
}

.expired {
  background-color: rgba(110, 0, 0, 0.1);
  border: 1px solid #6B0000;
}

.andamento {
  border: 2px solid #00796b;
}

.box-image {
  flex: 0 0 220px;
  height: 140px;
  border-radius: 8px;
  overflow: hidden;
}

.box-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.box-information {
  flex: 1;
}

.header .title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}

.details {
  font-size: 14px;
  color: #777;
  margin-bottom: 8px;
}

.description p {
  font-size: 16px;
  color: #555;
}

.delete-button {
  background-color: white;
  color: #00546B;
  border: 1px solid #a3a2a2;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: bold;
  transition: 0.3s;
}

.delete-button:hover {
  background-color: #00546B;
  color: white;
}

.emprego-ine {
  background-color: transparent;
  color: #6B0000;
  padding: 8px 12px;
  border: 1px solid #6B0000;
  font-size: 16px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .card {
    flex-direction: column;
    width: 90%;
  }

  .box-image {
    width: 100%;
    height: 160px;
  }

  .box-information {
    text-align: center;
  }
}
</style>
