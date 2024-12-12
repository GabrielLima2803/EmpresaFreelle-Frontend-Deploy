<script setup>
import CardProject from './CardProject.vue';
</script>

<template>
    <div class="container">
        <div class="container-top">
            <h3 class="title">Empregos Gerados</h3>
        </div>
        <div class="cards">
            <CardProject/>
            <CardProject/>
            <CardProject/>
            <CardProject/>
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