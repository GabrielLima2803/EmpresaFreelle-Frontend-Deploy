<script setup>
import ResetPasswordDesktop from './Desktop/ResetPasswordDesktop.vue';
import ResetPasswordMobile from './Mobile/ResetPasswordMobile.vue';
import { useScreen } from '@/composables';
const {isMobile} = useScreen();
</script>

<template>
    <ResetPasswordMobile v-if="isMobile"/>
    <ResetPasswordDesktop v-else/>
</template>