import axios from "axios";


const baseURL = "http://localhost:3000/contents"; 
// const baseURL = "https://rediux-back-developer.onrender.com/contents";

export const getConteudo = async (id) => {
    try {
        const response = await axios.get(`${baseURL}/retrieve/${id}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar o conteúdo: ", error);
        throw error;
    }
};

export const atualizarConteudo = async (id, conteudo) => {
    try {
        const response = await axios.put(`${baseURL}/update/${id}`, conteudo);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar o conteúdo: ", error);
        throw error;
    }
};

export const searchConteudo = async (searchTerm, searchMedia) => {
    try {
        const response = await axios.get(`${baseURL}/search?term=${searchTerm}&media=${searchMedia}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar o conteúdo: ", error);
        throw error;
    }
};

export const resetPassword = async (email) => {
    try {
        const response = await axios.post(`${baseURL}/forgot-password`, { email });
        return response.data;
    } catch (error) {
        console.error("Erro ao resetar a senha: ", error);
        throw error;
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getConteudo,
    atualizarConteudo,
    searchConteudo,
    resetPassword,
};
