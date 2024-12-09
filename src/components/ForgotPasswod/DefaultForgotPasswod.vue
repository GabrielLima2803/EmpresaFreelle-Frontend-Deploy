<script setup>
import ForgotPasswodDesktop from './Desktop/ForgotPasswodDesktop.vue';
import ForgotPasswodMobile from './Mobile/ForgotPasswodMobile.vue';

import { useScreen } from '@/composables';

const {isMobile} = useScreen()
</script>

<template>
    <ForgotPasswodMobile v-if="isMobile"/>
    <ForgotPasswodDesktop v-else/>
</template>

<style scoped>
</style>