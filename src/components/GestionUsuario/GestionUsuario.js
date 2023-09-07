import React from "react";

export function GestionUsuario() {

    let mockUsuario = [{
        nombre: 'Juan',
        legajo: '1928',
        email: 'juan@gmail.com',
        tipoUsuario: 'Operario'
    }];

    return (
        <>
            <h2 style={{textAlign: "left", textIndent: "50px"}}><u>Gestion Usuario</u></h2>
            <div className="container">
                <div className="card mb-3">
                    <div className="card-header"><h5 style={{textAlign: "left"}}>Tus datos</h5></div>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Legajo</th>
                                    <th>Email</th>
                                    <th>Tipo de usuario</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockUsuario.map((u) => (
                                    <tr key={u.legajo}>
                                        <td>{u.nombre}</td>
                                        <td>{u.legajo}</td>
                                        <td>{u.email}</td>
                                        <td>{u.tipoUsuario}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
};