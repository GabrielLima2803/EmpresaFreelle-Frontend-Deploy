import axios from "axios";

class EmpresaService {
    async getAllEmpresas() {
        try {
            const response = await axios.get("usuarios/empresas/");
            return response.data;
        } catch (error) {
            console.error('API request error:', error); 
            throw error;
        }
    }
    async getMeEmpresa(authToken) {
        try {
            const response = await axios.get('/usuarios/me', {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar o usuário logado:", error);
            throw error;  
        }
    }
    async updateMeUser(authToken, userData) {
        try {
            const response = await axios.patch('/usuarios/update_me/', userData, {
              headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'multipart/form-data'
              }
            });
            console.log('Resposta da API:', response.data); 
            return response.data;
          } catch (error) {
            console.error('Erro na API:', error);
            throw error;
          }
        }

}
 
export default new EmpresaService();