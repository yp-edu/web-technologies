import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './components/main_page'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)
