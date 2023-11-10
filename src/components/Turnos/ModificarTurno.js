import React, { useState } from "react";

export function ModificarTurno({ turno }) {
    const [cancelado, setCancelado] = useState(turno.cancelado);

    const handleCanceladoChange = (e) => {
        setCancelado(e.target.value === "1");
    };

    const handleSubmit = async () => {
        // Cargar nuevo estado del turno (para backend)
    };

    console.log(turno)

    return (
        <form onSubmit={handleSubmit}>
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
                <button style={{marginTop: "10px"}} className='btn btn-primary'>Guardar</button>
            </div>
        </form>
    );
}
