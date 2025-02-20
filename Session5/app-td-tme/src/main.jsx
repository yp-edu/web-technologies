import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import Exo1_1 from './components/ex1.1'
import Exo1_2 from './components/ex1.2'
import Exo1_3 from './components/ex1.3'
import Exo1_4 from './components/ex1.4'
import Exo1_5 from './components/ex1.5'
import Exo2_1 from './components/ex2.1'
import Exo2_2 from './components/ex2.2'
import Exo3 from './components/ex3'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="/ex1.1" element={<Exo1_1 />} />
        <Route path="/ex1.2" element={<Exo1_2 />} />
        <Route path="/ex1.3" element={<Exo1_3 />} />
        <Route path="/ex1.4" element={<Exo1_4 />} />
        <Route path="/ex1.5" element={<Exo1_5 />} />
        <Route path="/ex2.1" element={<Exo2_1 />} />
        <Route path="/ex2.2" element={<Exo2_2 />} />
        <Route path="/ex3" element={<Exo3 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
