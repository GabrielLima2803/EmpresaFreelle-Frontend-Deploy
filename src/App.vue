<script setup>
import { useLoadingStore } from '@/stores';
import { LoadingPage } from './components';

const { isLoading } = useLoadingStore();
</script>

<template>
  <LoadingPage v-if="isLoading" />
  <RouterView />
</template>

<style scoped>
</style>
