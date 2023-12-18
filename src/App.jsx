import './index.css';
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import {xorEncode} from "/public/tools.js";
import { useState } from "react";

function ProcessRequest(event) {
    event.preventDefault(); // Prevent the default form submit action
    // Your request processing logic here
    const [input] = useState('');
    const navigate = useNavigate();
    const encodedSrc = xorEncode(input);
    navigate(`service?src=${encodedSrc}`);


  }
function App() {
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
        <script src="/uv/uv.handler.js"></script>
  <script src="/uv/uv.bundle.js"></script>
  <script src="/uv/uv.config.js"></script>
      <div className="mt-8 sm:mt-12 lg:mt-16 relative flex justify-center">
        <div id="Glow" className="shadow-glow w-full max-w-xs sm:max-w-sm lg:max-w-md"/>
          <form id="urlForm" onSubmit={ProcessRequest}>
          <input id="address" placeholder="Browse the web freely" className="w-full max-w-xs sm:max-w-sm lg:max-w-md bg-[#181818] text-base text-[rgba(235,_235,_245,_0.6)] py-3 px-4 rounded-lg outline-none"/>
          </form>
      </div>
</>
)

}



export default App
