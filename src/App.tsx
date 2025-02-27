// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AllProjects from './AllProjects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />} />
        {/* Ruta de "Todos los Proyectos" */}
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
