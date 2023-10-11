import axios from 'axios';

const apiURL = 'http://localhost:3001';

const getAllTurnos = async () => {
    const res = await axios.get(`${apiURL}/turnos`);
    return res.data;
}

const turnosService = {
    getAllTurnos,
}

export default turnosService;