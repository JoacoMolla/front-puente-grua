import React, { useState, useEffect } from "react";
import turnos from "./mockTurnos.js";
import { ModificarTurno } from "./ModificarTurno.js";

export function Turnos() {
    const [lista, setLista] = useState([]);
    const [filaSeleccionada, setFilaSeleccionada] = useState(null);
    const [mostrarModificar, setMostrarModificar] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let mockTurnos = turnos;
            setLista(mockTurnos);
        };

        fetchData();
    }, []);

    const mostrarModificarTurno = (fila) => {
        if (fila === filaSeleccionada) {
            // Si se hace clic nuevamente en el mismo botón "Modificar", ocultamos el componente
            setMostrarModificar(false);
            setFilaSeleccionada(null);
        } else {
            setFilaSeleccionada(fila);
            setMostrarModificar(true);
        }
    }

    return (
        <>
            <h2 style={{ textAlign: "left", textIndent: "50px" }}><u>Turnos</u></h2>
            <div className="container">
                <div className="card mb-3">
                    <div className="card-body">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Id Turno</th>
                                    <th>Legajo Usuario</th>
                                    <th>Cancelado</th>
                                    <th>Fecha y Hora de Creación</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lista !== undefined && lista.length > 0 ?
                                    lista.map((t, index) => (
                                        <React.Fragment key={t.idTurno}>
                                            <tr>
                                                <td>{t.idTurno}</td>
                                                <td>{t.legajoUsuario}</td>
                                                <td>{t.cancelado === true ? 'Si' : 'No'}</td>
                                                <td>{t.fechaHoraCreacion}</td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-warning me-1"
                                                        onClick={() => mostrarModificarTurno(index)}>
                                                        &#128394; Modificar
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger">
                                                        &#128465; Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                            {filaSeleccionada === index && mostrarModificar && (
                                                <tr>
                                                    <td colSpan="5">
                                                        <ModificarTurno turno={t} />
                                                    </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
                                    )) :
                                    <tr key={'0'}>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
};
