import axios from 'axios';

const apiURL = 'http://localhost:3001';

const getAllTurnos = async () => {
    try {
        const res = await axios.get(`${apiURL}/turnos`);
        return res.data;
    } catch (err) {
        window.alert('No se pudo acceder al servidor de Backend')
        return
    }
}

const postNuevoTurno = async (datos) => {
    try {
        const res = await axios.post(`${apiURL}/turnos`, datos);
        window.alert('Turno cargado con éxito.')
        return res;
    } catch (err) {
        return err.message
    }
}

const turnosService = {
    getAllTurnos,
    postNuevoTurno
}

export default turnosService;