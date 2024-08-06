import { useState } from 'preact/hooks';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Cadastro from './pages/cadastro/Cadastro';
import Barber from './pages/Barbearia/homeBarber/Barber';
import './scss/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/barber" element={<Barber />} />
      </Routes>
    </HashRouter>
  );
}

export default App;