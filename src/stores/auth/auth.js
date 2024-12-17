import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { useLoadingStore } from '../others/loading';
import AuthService from '@/services/auth/auth';

const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
    const state = reactive({
        token: localStorage.getItem('authToken') || null,
    })

    const loadingStore = useLoadingStore()
    const isLogged = computed(() => !!state.token)
    const token = computed(() => state.token)

    function setToken(newToken) {
        state.token = newToken;
        localStorage.setItem('authToken', newToken);
      }

    function LogoutUser() {
        loadingStore.startLoading();
        state.token = null
        isLogged.value = false
        localStorage.removeItem('authToken')
        loadingStore.stopLoading();
    }

    async function RegisterEmpresa(empresaData) {
        loadingStore.startLoading();
        try {
          const response = await authService.RegisterEmpresa(empresaData);
          return response;
        } catch (error) {
          console.error('Erro no registro:', error);
          throw error;
        } finally {
          loadingStore.stopLoading();
        }
      }

      async function LoginEmpresa(credentials) {
        loadingStore.startLoading();
        try {
          const response = await authService.LoginEmpresa(credentials);
          setToken(response.access);
          return response;
        } catch (error) {
          console.error('Erro no login:', error);
          throw error;
        } finally {
          loadingStore.stopLoading();
        }
      }

      async function ForgotPasswordEmpresa(email) {
        loadingStore.startLoading();
        try {
          const response = await authService.ForgotPasswordEmpresa(email);
          return response;
        } catch (error) {
          console.error('Erro ao solicitar recuperação de senha:', error);
          throw error;
        } finally {
          loadingStore.stopLoading();
        }
      }

      async function ResetPasswordEmpresa(reset_code, new_passoword) {
        loadingStore.startLoading();
        try {
          const response = await authService.ResetPasswordEmpresa(reset_code, new_passoword);
          return response;
        } catch (error) {
          console.error('Erro ao resetar a senha:', error);
          throw error;
        } finally {
          loadingStore.stopLoading();
        }
      }

    return {
        isLogged,
        LogoutUser,
        RegisterEmpresa,
        LoginEmpresa,
        ForgotPasswordEmpresa,
        ResetPasswordEmpresa,
        token,
    }

})
