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

}
 
export default new ProjetoService();