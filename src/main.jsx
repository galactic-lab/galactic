//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import Settings from './Settings.jsx'
import Proccy from './Proxy.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useEffect} from "react";
import NavBar from './navbar.jsx'

function Main() {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register(`/register.js`, { scope: '/uv/' }).then(
                () => {
                    console.log('Proccy service worker registered');
                },
                (error) => {
                    console.error(`Proccy fail: ${error}`);
                }
            )

        } else {
            console.error('Service workers are not supported.');
        }
    });
   return (
       <>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/view" element={<Proccy />}></Route>
      {/*<Route path="settings" element={<Settings />}></Route>*/}
    </Routes>
  </>
   )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
    <Main />
    </BrowserRouter>

  </>
  )
