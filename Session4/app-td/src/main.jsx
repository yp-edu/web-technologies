import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Test from './components/Test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Test texte=" Et une nouvelle phrase."/>
  </StrictMode>,
)