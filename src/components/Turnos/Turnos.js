import React, { useState, useEffect } from "react";
import turnos from "./mockTurnos.js";
import { ModificarTurno } from "./ModificarTurno.js";

export function Turnos() {

    //Lista de turnos
    const [lista, setLista] = useState([]);

    //Mostrar modificar turno
    const [filaSeleccionada, setFilaSeleccionada] = useState(null);
    const [mostrarModificar, setMostrarModificar] = useState(false);

    //Mostrar turnos cancelados
    const [mostrarCancelados, setTurnosCancelados] = useState(false);

    let mockTurnos = turnos;

    useEffect(() => {
        const fetchData = async () => {
            setLista(mockTurnos);
        };

        fetchData();
    });

    const mostrarModificarTurno = (fila) => {
        if (fila === filaSeleccionada) {
            setMostrarModificar(false);
            setFilaSeleccionada(null);
        } else {
            setFilaSeleccionada(fila);
            setMostrarModificar(true);
        }
    }

    const eliminarTurno = (fila) => {
        console.log('Eliminar turno', fila)
    }

    const mostrarTurnosCancelados = () => {
        setTurnosCancelados(!mostrarCancelados);
    }

    return (
        <>
            <h2 style={{ textAlign: "left", textIndent: "50px" }}><u>Turnos</u></h2>
            <div className="container">
                <div className="form-check">
                    <label className="form-check-label" style={{ display: "flex", alignItems: "center" }}
                        onClick={() => mostrarTurnosCancelados()}>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <span style={{ marginLeft: "10px" }}>Mostrar turnos cancelados</span>
                    </label>
                </div>
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
                                    lista
                                        .filter(t => mostrarCancelados || !t.cancelado)
                                        .map((t, index) => (
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
                                                            className="btn btn-danger"
                                                            onClick={() => eliminarTurno(t)}>
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
