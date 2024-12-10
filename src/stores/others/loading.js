import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useLoadingStore = defineStore('loading', () => {
  const state = reactive({
    isLoading: false,
  });

  function startLoading() {
    state.isLoading = true;
  }

  function stopLoading() {
    state.isLoading = false;
  }

  return {
    isLoading: state.isLoading,
    startLoading,
    stopLoading,
  };
});
