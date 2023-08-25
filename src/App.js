//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';

import React from 'react';
import { BrowserRouter, Router, Switch, Route} from 'react-router-dom';

import { Header } from './components/Header';
import {Inicio} from './components/Inicio';

function Turnos() {
  return <div>Página de Turnos</div>;
}

function GestionUsuario() {
  return <div>Página de Gestión de Usuario</div>;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />

          <main>
            <Route path="/" element={<Inicio />}/>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
