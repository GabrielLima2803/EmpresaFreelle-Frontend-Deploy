<script setup>
import { useProjetoStore } from '@/stores/others/projeto';
import { ref, onMounted } from 'vue';

const projetoStore = useProjetoStore()

const projectsCurrents = ref({})

onMounted(() => {
    projectsCurrents.value = projetoStore.getCurrentProjects()  
})
</script>

<template>
    {{ projetoStore.currentProjeto }}
    <div class="container">
        <div class="box-img">
            <img :src="projectsCurrents.foto || 'https://via.placeholder.com/150'" alt="Imagem do projeto">
        </div>
        <div class="about">
            <h1>{{ projectsCurrents.name || 'Nome do Usuário' }}</h1>
            <p>{{ projectsCurrents.email || 'Email não disponível' }}</p>
            <p>{{ projectsCurrents.trabalho || 'Cargo ou trabalho não informado' }}</p>
        </div>
        <div>
            <button @click="aceitarVaga">Aceitar</button>
        </div>
    </div>
</template>



<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
