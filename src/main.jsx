//import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavBar } from './Navbar.jsx'
import App from './App.jsx'
//import Settings from './Settings.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <NavBar />
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}></Route>
          {/*<Route path="view" element={<Proxy />}></Route>*/}
        {/*<Route path="settings" element={<Settings />}></Route>*/}
  </Routes>
  </BrowserRouter>
  </>
  )
