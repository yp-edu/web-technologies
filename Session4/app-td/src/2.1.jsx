import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CardList from './components/2.1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardList />
  </StrictMode>,
)