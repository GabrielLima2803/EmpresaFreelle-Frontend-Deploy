<script setup>
import CardProject from './CardProject.vue'
import { useProjetoStore } from '@/stores/others/projeto'
import { onMounted, ref, computed } from 'vue'

const projetoStore = useProjetoStore()
const isLoading = ref(true)

const showAll = ref(false)
const maxInitialCards = 3

const displayedProjects = computed(() => {
  return showAll.value
    ? projetoStore.currentProjeto 
    : projetoStore.currentProjeto.slice(0, maxInitialCards) 
})

onMounted(async () => {
  await projetoStore.getCurrentProjects()
  console.log('Projetos carregados', projetoStore.currentProjeto)
  isLoading.value = false
})

const toggleShowAll = () => {
  showAll.value = !showAll.value
}
</script>

<template>
  <div class="container">
    <div class="container-top">
      <h3 class="title">Empregos Gerados</h3>
    </div>

    <div class="cards">
      <CardProject
        v-for="projeto in displayedProjects"
        :key="projeto.id"
        :Projects="projeto"
      />
    </div>

    <div class="container-bottom">
      <h3 class="title btn" @click="toggleShowAll">
        {{ showAll ? 'Ver menos -' : 'Ver mais +' }}
      </h3>
    </div>
  </div>
</template>
<style scoped>
.container-top {
  margin-top: 10vh;
  margin-bottom: 100px;
}
.btn {
  cursor: pointer;
}
.title {
  color: #00546b;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 2em;
}
.container-bottom {
  margin-top: 5vh;
}
</style>
