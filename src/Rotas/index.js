import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from '../paginas/Home';
import Contato from '../paginas/Contato';

const Rotas = () => (
    <HashRouter>
        <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route exact path='/contato' element={ <Contato /> } />
        </Routes>
    </HashRouter>
);

export default Rotas;