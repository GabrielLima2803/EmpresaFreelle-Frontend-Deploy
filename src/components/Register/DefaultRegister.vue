<script setup>
import { useScreen } from "@/composables";
import RegisterDesktop from "./Desktop/RegisterDesktop.vue";
import RegisterMobile from "./Mobile/RegisterMobile.vue";

const {isMobile} = useScreen()
</script>

<template>
<RegisterMobile v-if="isMobile"/>
<RegisterDesktop v-else/>
</template>

<style scoped>

</style>