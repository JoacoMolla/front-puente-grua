import { useForm } from "react-hook-form";
import React from "react-hook-form";
import mesesConDias from "./listaDiasTurnos";

const mesesNumero = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
]

const mesesNombre = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

export function CrearTurno() {

    const { register, handleSubmit } = useForm();


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container my-2">
                    <div className="card" style={{ display: "flex", textAlign: "left" }}>
                        <div className="card-body">
                            <h5>Registrar nuevo turno</h5>

                            <div className="form-row row">
                                {/**Cargar el mes */}
                                <div className="form-group col-md-2">
                                    <label for="seleccionarMes">Seleccione el mes</label>
                                    <select id="seleccionarMes" className="form-control" {...register('mes')}>
                                        <option selected>Seleccione...</option>
                                        {mesesNumero.map((mes) => (
                                            <option key={mes} value={mes}>{mesesNombre[mes - 1]}</option>
                                        ))}
                                    </select>
                                </div>
                                {/**Cargar el día */}
                                <div className="form-group col-md-2">
                                    <label for="seleccionarDia">Seleccione el dia</label>
                                    <select id="seleccionarDia" className="form-control" {...register('dia')}>

                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </>
    )

}