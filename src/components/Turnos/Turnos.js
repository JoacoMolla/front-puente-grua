import React, { useState, useEffect } from "react";
import { ModificarTurno } from "./ModificarTurno.js";
import { CrearTurno } from "./CrearTurno.js";

import materiasService from '../../services/turnos.service.js';

export function Turnos() {

    //Lista de turnos
    const [lista, setLista] = useState([]);

    //Mostrar modificar turno
    const [filaSeleccionada, setFilaSeleccionada] = useState(null);
    const [mostrarModificar, setMostrarModificar] = useState(false);

    //Mostrar turnos cancelados
    const [mostrarCancelados, setTurnosCancelados] = useState(false);

    //Mostrar crear turno
    const [mostrarCreacion, setMostrarCreacion] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            //setLista(mockTurnos);
            const turnos = await materiasService.getAllTurnos();
            setLista(turnos);
        };

        fetchData();
    }, []);

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

    const mostrarCrearTurno = () => {
        setMostrarCreacion(!mostrarCreacion);
    }

    return (
        <>
            <h2 style={{ textAlign: "left", textIndent: "50px" }}><u>Turnos</u></h2>

            {/* Botón para mostrar los turnos cancelados */}
            <div className="container my-2">
                <div className="container" style={{ display: "flex" }}>
                    <div className="form-check checkbox-lg">
                        <label className="form-check-label"
                            style={{ display: "flex", alignItems: "center" }}
                            onClick={() => mostrarTurnosCancelados()}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault" />
                            <span style={{ marginLeft: "10px" }}><b>Mostrar turnos cancelados</b></span>
                        </label>
                    </div>
                </div>

                {/* Creacion de un nuevo turno */}
                <div className="container my-2">
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => mostrarCrearTurno()}
                        style={{ display: "flex" }}>
                        &#9989; Registrar nuevo turno
                    </button>
                </div>

                {mostrarCreacion &&
                    <CrearTurno />}

                {/* Modificacion y baja de turno */}
                <div className="container">
                    <div className="card mb-3">
                        <div className="card-body">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Id Turno</th>
                                        <th>Legajo Usuario</th>
                                        <th>Cancelado</th>
                                        <th>Fecha y Hora de Inicio</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {lista !== undefined && lista.length > 0 ? 
                                        lista
                                            .filter(t => (mostrarCancelados || t.nombreEstadoTurno.nombre !== 'Cancelado') || (t.nombreEstadoTurno.nombre !== 'Cancelado'))
                                            .map((t, index) => (
                                                <React.Fragment key={t.turno.idTurno}>
                                                    <tr>
                                                        <td>{t.turno.idTurno}</td>
                                                        <td>{t.turno.usuarioLegajo}</td>
                                                        <td>{t.nombreEstadoTurno.nombre === 'Cancelado' ? 'Si' : 'No'}</td>
                                                        <td>{t.detalleTurno.diaHoraInicio}</td>
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
            </div>
        </>
    )
};
