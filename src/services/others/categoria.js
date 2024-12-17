import axios from "axios";

class CategoriaService {
    async getAllCategorias() {
        try {
            const response = await axios.get("categorias/");
            return response.data;
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    }
  }

export default new CategoriaService();
