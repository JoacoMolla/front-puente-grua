import React from "react";

export function Inicio() {
    return (
        <>
            <h1>
                ¡Bienvenido al turnero del puente grúa!
            </h1>
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">Para comenzar elija si quiere gestionar sus turnos o gestionar su cuenta.</h3>
                    <a href="/turnos" class="btn btn-primary">Ir a turnero</a>
                    <a href="/gestion-usuario" style={{
                        marginLeft: '20px', 
                        backgroundColor: 'dark-cyan',
                        borderColor: 'dark-cyan'}} 
                        class="btn btn-primary">Ir a gestionar usuario</a>
                </div>
            </div>
        </>
    )
}
