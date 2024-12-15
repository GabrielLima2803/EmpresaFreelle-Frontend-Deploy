import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { useLoadingStore } from "./loading";
import EmpresaService from '../../services/others/empresa';

const empresaService = EmpresaService;

export const useEmpresaStore = defineStore('empresas', () => {
    const state = reactive({
        currentEmpresa: []
    })

    const currentEmpresa = computed(() => state.currentEmpresa)

    const loadingStore = useLoadingStore();

    const getMeEmpresa = async (token) => {
        loadingStore.startLoading();
        try {
            const data = await empresaService.getMeEmpresa(token);  
            state.currentEmpresa = data;  
          } catch (error) {
            console.error('Erro ao buscar o usuário logado:', error);
          } finally {
            loadingStore.stopLoading();
          }
    }

    const updateMeUser = async (authToken, formData) => {
      loadingStore.startLoading();
    
      try {
        const response = await empresaService.updateMeUser(authToken, formData);
        
        if (JSON.stringify(state.currentUser) !== JSON.stringify(response.data)) {
          console.log('Dados recebidos:', response.data);
          state.currentUser = response.data; 
        }
    
        state.error = null;
      } catch (error) {
        state.error = 'Erro ao atualizar o perfil';
        console.error('Erro ao atualizar o perfil:', error);
      } finally {
        loadingStore.stopLoading();
      }
    };
  

    return {
        currentEmpresa,
        getMeEmpresa,
        updateMeUser
    }
})