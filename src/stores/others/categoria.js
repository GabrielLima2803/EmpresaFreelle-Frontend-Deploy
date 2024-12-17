import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { useLoadingStore } from "./loading";
import CategoriaService from '@/services/others/categoria';

const categoriaService = CategoriaService;
export const useCategoriaStore = defineStore('categoria', () => {
  const state = reactive({
    categorias: [],
  })
  const loadingStore = useLoadingStore();
  const categorias = computed(() => state.categorias)

  const getAllCategorias = async () => {
    loadingStore.startLoading();
    try {
        const data = await categoriaService.getAllCategorias();
        state.categorias = data.results;
      } catch (error) {
        console.error('Erro ao buscar o usuário logado:', error);
      } finally {
        loadingStore.stopLoading();
      }
  }
  return {
    categorias,
    getAllCategorias
  }
})
