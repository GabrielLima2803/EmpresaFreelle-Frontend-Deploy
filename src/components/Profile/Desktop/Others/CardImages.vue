<script setup>
import { computed, ref } from 'vue';

const images = ref([
  { src: 'https://via.placeholder.com/150', alt: 'Descrição da imagem 1' },
  { src: 'https://via.placeholder.com/150', alt: 'Descrição da imagem 2' },
  { src: 'https://via.placeholder.com/150', alt: 'Descrição da imagem 3' },
  { src: 'https://via.placeholder.com/150', alt: 'Descrição da imagem 4' },
  { src: 'https://via.placeholder.com/150', alt: 'Descrição da imagem 5' },
]);

const props = defineProps({
  textoSecao: {
    type: String,
    default: 'Gastronomia',
  },
  reviewCard: {
    type: String,
    default: '0',
  },
});

const ratings = ref({
  5: 12508,
  4: 1492,
  3: 800,
  2: 200,
  1: 0,
});

const totalRatings = computed(() => {
  return Object.values(ratings.value).reduce((total, num) => total + num, 0);
});

const calculatePercentage = (stars) => {
  return ((ratings.value[stars] / totalRatings.value) * 100).toFixed(1);
};

// const selectedRating = ref(0);

// const onRate = (rating) => {
//   alert(`Você avaliou ${rating} estrelas!`);
//   selectedRating.value = rating;
// };
</script>

<template>
  <div class="container">
    <div>
      <h3 class="title">Imagens que falam, histórias que se revelam +</h3>
    </div>
    <div class="projects">
      <div v-for="image in images" :key="image.src">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>

    <div class="classe">
      <h3>Área de Atuação</h3>
      <p>{{ props.textoSecao }}</p>
    </div>
    <div class="border"></div>
    <div class="rating">
    <div>
      <h3 class="title">Avaliações</h3>
      <p class="review">{{ (totalRatings / 1000).toFixed(1) }}k avaliações</p>
    </div>

    <div class="rating-bars">
      <div v-for="star in [5, 4, 3, 2, 1]" :key="star" class="rating-bar">
        <span class="star-label">{{ star }} estrelas</span>
        <div class="bar-container">
          <div class="bar" :style="{ width: calculatePercentage(star) + '%' }"></div>
        </div>
        <span class="rating-count">({{ ratings[star] }})</span>
      </div>
    </div>

    <p class="details">Classificação detalhada</p>
  </div>
  </div>
</template>

<style scoped>
.border {
  margin: 15px auto 30px;
  width: 100%;
  height: 1px;
  background-color: #bababa;
}
.title {
  font-weight: bold;
  text-decoration: solid;
}
.classe h3 {
  font-weight: bold;
}
.classe {
  margin-top: 40px;
}
.projects {
  display: flex;
  overflow-x: auto;
  gap: 10px;
}
.projects img {
  flex: 0 0 auto;
  width: 200px;
  height: 150px;
  margin: 10px;
}
.rating {
  max-width: 300px;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.review {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.rating-bars {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.rating-bar {
  display: flex;
  align-items: center;
  gap: 8px;
}

.star-label {
  font-size: 12px;
  width: 60px;
  text-align: right;
  color: #333;
}

.bar-container {
  flex: 1;
  height: 8px;
  background-color: #eee;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.bar {
  height: 100%;
  background-color: #000;
  border-radius: 4px;
  transition: width 0.3s;
}

.rating-count {
  font-size: 12px;
  color: #666;
}

.details {
  font-size: 12px;
  color: #666;
  text-align: right;
  margin-top: 10px;
}
</style>
