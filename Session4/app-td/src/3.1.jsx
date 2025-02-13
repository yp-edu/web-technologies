import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FormAddCarte from './components/3.1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormAddCarte />
  </StrictMode>,
)