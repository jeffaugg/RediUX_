import axios from "axios";

const baseURL = "http://localhost:3000/contents";

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

export default {
    getConteudo,
    atualizarConteudo,
};
