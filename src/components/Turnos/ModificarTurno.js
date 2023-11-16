import React, { useState } from "react";
import { useForm } from "react-hook-form";
import turnosService from "../../services/turnos.service";

export function ModificarTurno({ turno, onSubmitComplete }) {
    const [cancelado, setCancelado] = useState(false);
    const { handleSubmit } = useForm();

    const handleCanceladoChange = (e) => {
        setCancelado(e.target.value === "1");
    };

    const onSubmit = async (data) => {
        if (cancelado) {
            const res = await turnosService.updateTurnoCancelado
            (turno.turno.idTurno, 'Cancelado por el usuario');
            window.alert(res);
            onSubmitComplete();
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md">
                    <div className="form-floating">
                        <select
                            className="form-select"
                            id="floatingSelectGrid"
                            aria-label="Floating label select example"
                            onChange={handleCanceladoChange}
                            value={cancelado ? "1" : "2"}>
                            <option value="1">Sí</option>
                            <option value="2">No</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">Cancelar turno</label>
                    </div>
                </div>
            </div>
            <div className="col-md-8 text-start">
                <button style={{ marginTop: "10px" }} className='btn btn-primary'>Guardar</button>
            </div>
        </form>
    );
}
