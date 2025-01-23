import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './i18n/i18n.tsx'
import ThemeContextProvider from './components/ThemeContextProvider/ThemeContextProvider.tsx'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>
)
