import axios from "axios";

class PortifolioService {
    async postImagePortifolio(portifolioData) {
        try {
            const response = await axios.post("portifolios/", portifolioData);
            return response.data;
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    }
  }

export default new PortifolioService();
