import React, { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import turnos from "./mockTurnos.js";

export function Turnos() {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let mockTurnos = turnos;
        };

        fetchData();

    }, []);

    return (
        <>
            <h3 style={{ textAlign: "left", textIndent: "50px" }}>Turnos</h3>
            <div className="container">
                <div className="card mb-3">
                    <div className="card-body">
                        <h4>En progreso</h4>
                    </div>
                </div>
            </div>
        </>
    )
};