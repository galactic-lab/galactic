//import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import Settings from './Settings.jsx'
import Proccy from "./Proxy.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function Main() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js", {
          scope: "/site/",
        })
        .then(() => {
          console.log("Service worker registered");
        });
    } else {
      console.error("Service workers are not supported on this device");
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
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </>,
);
