import { useForm } from "react-hook-form";
import React from "react-hook-form";


export function CrearTurno() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    console.log(errors);

    const onSubmit = () => {
    };

    let enMismoDia = false;

    return (
        <>
            <form onSubmit={handleSubmit(() => { console.log('Formulario enviado') })}>
                <div className="container my-2">
                    <div className="card" style={{ display: "flex", textAlign: "left" }}>
                        <div className="card-body">
                            <h5>Registrar nuevo turno</h5>

                            <div className="form-row row">
                                <div className="form-group col-md-2">

                                    <label>Fecha del turno</label>
                                    <input
                                        type="date"
                                        {...register("fechaInicioTurno", {
                                            required: {
                                                value: true,
                                                message: "La fecha del turno es requerida."
                                            },
                                            validate: (value) => {
                                                const fechaTurno = new Date(value);
                                                const fechaActual = new Date();
                                                if (fechaTurno < fechaActual) {
                                                    return "La fecha del turno no puede ser en el pasado ni en el mismo dia.";
                                                }
                                                return true;
                                            }
                                        })}
                                    />
                                    {
                                        errors.fechaInicioTurno && <span color="red">{errors.fechaInicioTurno.message}</span>
                                    }
                                </div>
                                <div className="form-group col-md-2">
                                    <label>Hora del turno</label>
                                    <input
                                        type="time"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="container my-2">
                            <button
                                type="submit"
                                className="btn btn-success">Crear turno</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );

};