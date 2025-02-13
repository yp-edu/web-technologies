import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './components/1.1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card symbol="X"/>
    <Card symbol="O"/>
  </StrictMode>,
)