import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CardList from './components/2.2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardList cartes={[
    { id: 1, symbol: 'X', display: 'visible' },
    { id: 2, symbol: 'O', display: 'hidden' },
    { id: 3, symbol: 'X', display: 'hidden' },
    { id: 4, symbol: 'O', display: 'hidden' },
  ]}/>
  </StrictMode>,
)