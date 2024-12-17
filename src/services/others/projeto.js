import axios from "axios";

class ProjetoService {
    async getCurrentProjects(token) {
        try {
            const response = await axios.get("projetos/current-projetos/", token);
            return response.data;
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    }

      async getCandidatosEmpresa(token) {
        try {
            const response = await axios.get("projetos/candidatos-da-empresa/", token);
            return response.data;
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    }

    async postProjeto(formData) {
      try {
            const response = await axios.post("projetos/", formData);
            return response.data;
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    }

    async deleteProjeto(projetoId) {
      try {
        const response = await axios.delete(`projetos/${projetoId}/`);
        return response.data;
      } catch (error) {
        console.error('API request error:', error);
        throw error;
      }
    }

    async selectCandidato(projetoId, token, application_id) {
      try {
        const response = await axios.post(
          `projetos/${projetoId}/select_candidate/`,
          { application_id: application_id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
        );
        return response.data;
      } catch (error) {
        console.error('API request error:', error);
        throw error;
      }
    }

  }

export default new ProjetoService();
