import { useForm } from "react-hook-form";
import React from "react-hook-form";
import zonasService from "../../services/zonas.service";
import { useState, useEffect } from "react";
import turnosService from "../../services/turnos.service";

export function CrearTurno({ onSubmitComplete }) {

    const { register, handleSubmit, formState: { errors } } = useForm();

    // Cargar el nuevo turno
    const onSubmit = async (data) => {
        const fechaTurno = new Date(data.fechaInicioTurno + 'T' + data.horaTurno);
        const fechaActual = new Date();
        if (fechaActual > fechaTurno) {
            window.alert('La fecha y hora actual es mayor que la del turno para cargar.')
            return
        }
        const res = await turnosService.postNuevoTurno(data);
        window.alert(res)
        onSubmitComplete();
    };

    const [listaZona, setListaZona] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const zonas = await zonasService.getZonasVigentes();
            setListaZona(zonas);
        }

        fetchData();
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container my-2">
                    <div className="card" style={{ display: "flex", textAlign: "left" }}>
                        <div className="card-body">
                            <h5>Registrar nuevo turno</h5>

                            <div className="form-row row">
                                <div className="form-group col-md-2">

                                    <span>Fecha del turno</span>
                                    <input
                                        type="date"
                                        {...register("fechaInicioTurno", {
                                            required: {
                                                value: true,
                                                message: "La fecha del turno es requerida."
                                                },
                                        })}
                                    />
                                </div>
                                <div className="form-group col-md-2">
                                    <label>Hora del turno</label>
                                    <input
                                        type="time"
                                        {...register("horaTurno", {
                                            required: {
                                                value: true,
                                                message: 'La hora del turno es requerida.'
                                            }
                                        })}
                                    />
                                </div>

                                <div className="form-group col-md-2">
                                    <label>Zona inicial</label>
                                    <select className="form-control"
                                        // Crear una validacion de que no se seleccione default
                                        {...register("zonaInicial", {
                                            validate: (value) => {
                                                if (value === "Seleccione la zona inicial") {
                                                    return "Seleccione una zona de las disponibles."
                                                } return true;
                                            }
                                        })}
                                    >
                                        <option>Seleccione la zona inicial</option>
                                        {listaZona !== null
                                            ?
                                            listaZona.map((z) => (
                                                // Aca lo que se guarda es el id de la zona, no el numero de la zona
                                                <option key={z.idZona} value={z.idZona}>{z.numeroZona}</option>
                                            ))
                                            : <option></option>}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Mostrar errores */}
                        <div className="container my-2">
                            {
                                errors.fechaInicioTurno &&
                                <span style={{ color: "red" }}>{errors.fechaInicioTurno.message}</span>
                            }
                            {
                                errors.horaTurno &&
                                <span style={{ color: "red" }}>{' ' + errors.horaTurno.message}</span>
                            }
                            {
                                errors.zonaInicial &&
                                <span style={{ color: "red" }}>{' ' + errors.zonaInicial.message}</span>
                            }
                        </div>

                        <div className="container my-2">
                            <button
                                type="submit"
                                className="btn btn-success"
                            >Crear turno</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );

};