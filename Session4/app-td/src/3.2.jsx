import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PageCard from './components/3.2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageCard />
  </StrictMode>,
)