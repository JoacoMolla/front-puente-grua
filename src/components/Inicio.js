import React from "react";

import logoTurno from "../images/logoTurno.png";

export function Inicio() {
    return (
        <>
            <h1>
                ¡Bienvenido al turnero del puente grúa!
            </h1>
            <div className="card w-50 col-6 offset-3">
                <div className="card-body">
                    <h3 className="card-title">Para comenzar elija si quiere gestionar sus turnos o gestionar su cuenta.</h3>
                    <a href="/turnos" className="btn btn-primary">Ir a turnero</a>
                    <a href="/gestion-usuario" style={{
                        marginLeft: '20px',
                        backgroundColor: 'dark-cyan',
                        borderColor: 'dark-cyan'
                    }}
                        className="btn btn-primary">Ir a gestionar usuario</a>
                </div>
            </div>
            <div>
                <img src={logoTurno} alt="Logo" style={{ width: "200px", height: "200px" }}></img>
            </div>
        </>
    )
}
