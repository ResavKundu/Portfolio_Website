import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './index.css'
import NavBar from './components/Navbar/NavBar.jsx'
import Body from './components/Navbar/Main/Body.jsx'
import SkillSet from './components/SkillSet.jsx'
import Academic from './components/Academic.jsx'
import { ThemeProvider } from './Context/theme.js'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <App />
  </BrowserRouter>

  </StrictMode>,
)
