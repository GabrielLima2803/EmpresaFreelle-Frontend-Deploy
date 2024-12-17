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

  const postProjeto = async (formData) => {
    loadingStore.startLoading();
    try {
      const data = await projetoService.postProjeto(formData);
      console.log('Projeto criado:', data);
    } catch (error) {
      console.error('Erro ao cadastrar o projeto:', error);
    } finally {
      loadingStore.stopLoading();
    }
  };

  const deleteProjeto = async (projetoId) => {
    loadingStore.startLoading();
    try {
      await projetoService.deleteProjeto(projetoId);
      alert('Projeto excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir o projeto:', error);
    } finally {
      loadingStore.stopLoading();
    }
  };

  const selectCandidato = async (projetoId, token, application_id) => {
    loadingStore.startLoading();
    try {
      console.log("Id Canditado Store", application_id)
      const response = await projetoService.selectCandidato(projetoId, token, application_id);
      console.log('Candidato selecionado com sucesso:', response);
      return response;
    } catch (error) {
      console.error('Erro ao selecionar o candidato:', error);
      throw error;
    } finally {
      loadingStore.stopLoading();
    }
  };
    return {
        currentProjeto,
        candidatosEmpresa,
        getCurrentProjects,
        getCandidatosEmpresa,
        postProjeto,
        deleteProjeto,
        selectCandidato
    }
})
