import axios from "axios";

const apiURL = 'http://localhost:3001';

const getZonasVigentes = async () => {
    const res = await axios.get(`${apiURL}/zonas`);
    return res.data;
}

const zonasService = {
    getZonasVigentes
}

export default zonasService;