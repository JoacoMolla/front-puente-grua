import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';
import { Inicio } from './components/Inicio'
import { ErrorNotFound } from './components/Error/ErrorNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Inicio />} />

            <Route path='/*' element={<ErrorNotFound />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}

export default App;