import axios from 'axios';

const apiURL = 'http://localhost:3001';

const getAllTurnos = async () => {
    try {
        const res = await axios.get(`${apiURL}/turnos`);
        return res.data;
    } catch (err) {
        return []
    }
}

const postNuevoTurno = async (datos) => {
    try {
        const res = await axios.post(`${apiURL}/turnos`, datos);
        if (res.data.error) {
            return res.data.error;
        } else {
            return 'Turno cargado con éxito.';
        }

    } catch (err) {
        return 'No se pudo acceder al servidor de Backend';
    }
}

const deleteTurno = async (datos) => {
    try {
        const res = await axios.delete(`${apiURL}/turnos`, {
            params: {
                idTurno: datos
            }
        })
        if (res.data.err) {
            return res.data.error;
        } else {
            return 'Turno eliminado con éxito'
        }
    } catch (err) {
        return 'No se pudo acceder al servidor de Backend'
    }
}

const updateTurnoCancelado = async (idTurno, descripcion) => {
    try {
        const res = await axios.put(`${apiURL}/turnos/cancelar`, {
            params: {
                idTurno: idTurno,
                descripcion: descripcion
            }
        })
        console.log(res)
        if (res.data.err) {
            return res.data.err;
        } else {
            return 'Turno cancelado con éxito'
        }
    } catch (err) {
        return 'No se pudo acceder al servidor de Backend'
    }
}

const turnosService = {
    getAllTurnos,
    postNuevoTurno,
    deleteTurno,
    updateTurnoCancelado
}

export default turnosService;