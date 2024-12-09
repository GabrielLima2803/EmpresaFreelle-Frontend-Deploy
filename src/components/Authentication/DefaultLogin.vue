<script setup>
import LoginDesktop from './Desktop/LoginDesktop.vue';
import LoginMobile from './Mobile/LoginMobile.vue';

import { useScreen } from '@/composables';

const {isMobile} = useScreen();
</script>

<template>
    <LoginMobile v-if="isMobile"/>
    <LoginDesktop v-else/>
</template>

<style scoped>

</style>