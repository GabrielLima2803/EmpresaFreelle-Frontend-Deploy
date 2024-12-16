import { computed, reactive } from "vue";
import { useLoadingStore } from "./loading";
import { defineStore } from "pinia";
import ProjetoService from '@/services/others/projeto'

const projetoService = ProjetoService
export const useProjetoStore = defineStore('projeto', () => {
    const state = reactive({
      currentProjeto: [],
      canditadosEmpresa: []
    });
    const currentProjeto = computed(() => state.currentProjeto);
    const candidatosEmpresa = computed(() => state.canditadosEmpresa);
    const loadingStore = useLoadingStore();


    const getCurrentProjects = async (token) => {
        loadingStore.startLoading();
        try {
            const data = await projetoService.getCurrentProjects(token);
            state.currentProjeto = data;
          } catch (error) {
            console.error('Erro ao buscar o usuário logado:', error);
          } finally {
            loadingStore.stopLoading();
          }
    }

    const getCandidatosEmpresa = async (token) => {
      loadingStore.startLoading();
      try {
          const data = await projetoService.getCandidatosEmpresa(token);
          // console.log('Candidatos recebidos:', data);
          state.canditadosEmpresa = data;
        } catch (error) {
          console.error('Erro ao buscar o usuário logado:', error);
        } finally {
          loadingStore.stopLoading();
        }
  }
    return {
        currentProjeto,
        candidatosEmpresa,
        getCurrentProjects,
        getCandidatosEmpresa
    }
})
