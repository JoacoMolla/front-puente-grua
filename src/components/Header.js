import React from 'react';
import { Link } from 'react-router-dom'; // Si estás utilizando React Router para la navegación

export function Header() {
  return (
    <div className='container'>
        <div className='card mb-3'>
            <div className='card-header'>
                <p className='text-center'>
                <Link to='/'>Inicio</Link> | <Link to='/turnos'>Turnos</Link> | <Link to='/gestion-usuario'>Gestion de Usuario</Link>
                </p>
            </div>
        </div>
    </div>
  );
}
