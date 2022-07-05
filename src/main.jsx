import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from "./Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Routes>
            <Route index="/" element={<App />}>
                  <Route index="/" element={<Home />} />
            </Route>
        </Routes>
  </BrowserRouter>
)
