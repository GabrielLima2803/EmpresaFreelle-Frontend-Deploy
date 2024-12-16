import { computed, reactive } from "vue";
import { useLoadingStore } from "./loading";
import { defineStore } from "pinia";
import ProjetoService from '@/services/others/projeto'

const projetoService = ProjetoService
export const useProjetoStore = defineStore('projeto', () => {
    const state = reactive({
        currentProjeto: [],
    })
    const currentProjeto = computed(() => state.currentProjeto)
    const loadingStore = useLoadingStore();


    const getCurrentProjects = async (token) => {
        loadingStore.startLoading();
        try {
            const data = await projetoService.getCurrentProjects(token);  
            state.currentEmpresa = data;  
          } catch (error) {
            console.error('Erro ao buscar o usuário logado:', error);
          } finally {
            loadingStore.stopLoading();
          }
    }
    return {
        currentProjeto,
        getCurrentProjects
    }
})