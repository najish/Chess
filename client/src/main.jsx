import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChessBoardProvider } from './contexts/ChessboardContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChessBoardProvider>
      <App />
    </ChessBoardProvider>
  </StrictMode>
)
