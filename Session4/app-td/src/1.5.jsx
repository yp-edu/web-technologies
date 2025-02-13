import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './components/1.5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card symbol="X" affichage="visible"/>
    <Card symbol="O" affichage="hidden"/>
  </StrictMode>,
)