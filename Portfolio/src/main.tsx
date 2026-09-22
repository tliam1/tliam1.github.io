import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { ResumeViewer } from './pages/pdf/pdf'
import './index.css'
import { SkillsGraph } from './pages/skills/skills'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route Component={ResumeViewer} path="/resume" />
        <Route Component={SkillsGraph} path="/skills" />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
