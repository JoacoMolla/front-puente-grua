import axios from "axios";

const apiURL = '/api';

const getZonasVigentes = async () => {
    const res = await axios.get(`${apiURL}/zonas`);
    return res.data;
}

const zonasService = {
    getZonasVigentes
}

export default zonasService;