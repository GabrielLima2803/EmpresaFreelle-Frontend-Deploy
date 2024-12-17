<script setup>
import ProfileDesktop from './Desktop/ProfileDesktop.vue';
import ProfileMobile from './Mobile/ProfileMobile.vue'
import { useScreen } from '@/composables';
const {isMobile} = useScreen();
</script>

<template>
    <ProfileMobile v-if="isMobile"/>
    <ProfileDesktop v-else/>
</template>

<style scoped>

</style>