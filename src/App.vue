<script setup>
import { useLoadingStore } from '@/stores';
import { computed } from 'vue';
import { LoadingPage } from './components';

const loadingStore = useLoadingStore()
const isLoading = computed(() => loadingStore.isLoading);
</script>

<template>
  <LoadingPage v-if="isLoading" />
  <RouterView />
</template>

<style scoped>
</style>
