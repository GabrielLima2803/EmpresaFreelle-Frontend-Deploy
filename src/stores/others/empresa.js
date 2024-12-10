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
            state.currentUser = data;  
          } catch (error) {
            console.error('Erro ao buscar o usuário logado:', error);
          } finally {
            loadingStore.stopLoading();
          }
    }

    return {
        currentEmpresa,
        getMeEmpresa
    }
})