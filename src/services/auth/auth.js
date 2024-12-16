import axios from "axios";

class AuthService {
     async RegisterEmpresa(empresaData) {
        try {
            const response = await axios.post("register-empresa/", empresaData);
            return response.data;
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    }

    async LoginEmpresa(credentials) {
        try {
            const response = await axios.post("login/", credentials);
            return response.data;
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    }

    async ForgotPasswordEmpresa(email) {
        try {
            const response = await axios.post("forgot-password/", { email });
            return response.data;
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    }
    async ResetPasswordEmpresa(reset_code, new_passoword) {
        try {
            const response = await axios.post("reset-password/", reset_code, new_passoword);
            return response.data;
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    }
}

export default AuthService;
