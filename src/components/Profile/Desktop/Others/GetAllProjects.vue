<script setup>
import CardProject from './CardProject.vue';
import { useProjetoStore } from '@/stores/others/projeto';
import { onMounted, ref } from 'vue';

const projetoStore = useProjetoStore();
const isLoading = ref(true);

onMounted(async () => {
  await projetoStore.getCurrentProjects();
  console.log("Projetos carregados", projetoStore.currentProjeto);

  isLoading.value = false;
});
</script>

<template>
    <div class="container">
        <div class="container-top">
            <h3 class="title">Empregos Gerados</h3>
        </div>
        <div class="cards">
            <!-- Iterando sobre os projetos e passando cada projeto como prop -->
            <CardProject
              v-for="(projeto, index) in projetoStore.currentProjeto"
              :key="index"
              :Projects="projeto" />
        </div>
        <div class="container-bottom">
            <h3 class="title">Ver mais +</h3>
        </div>
    </div>
</template>

<style scoped>
.container-top{
    margin-top: 10vh;
}
.title{
     color: #00546B;
     text-align: center;
     font-weight: bold;
     font-size: 24px;
}
.cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 2em;
}
.container-bottom{
    margin-top: 5vh;
}
</style>
