import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { useLoadingStore } from "./loading";
import PortifolioService from "@/services/others/portifolio";

const portifolioService = PortifolioService;

export const usePortifolioStore = defineStore("portifolio", () => {
  const state = reactive({
    portifolio: [],
  });

  const loadingStore = useLoadingStore();
  const portifolio = computed(() => state.portifolio);

  const postImagePortifolio = async (portifolioData) => {
    loadingStore.startLoading();
    try {
      const data = await portifolioService.postImagePortifolio(portifolioData);
      state.portifolio.push(data); 
    } catch (error) {
      console.error("Erro ao enviar imagem para o portfólio:", error);
    } finally {
      loadingStore.stopLoading();
    }
  };

  return {
    portifolio,
    postImagePortifolio,
  };
});
