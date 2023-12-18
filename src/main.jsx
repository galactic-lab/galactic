//import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavBar } from './navbar.jsx'
import App from './App.jsx'
//import Settings from './Settings.jsx'
//import Proxy from './Proxy.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useEffect} from "react";

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
    <NavBar />
    <Routes>
      <Route path="/" element={<App />}></Route>
      {/*<Route path="view" element={<Proxy />}></Route>
      <Route path="settings" element={<Settings />}></Route>*/}
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
