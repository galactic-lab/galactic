import './index.css';
import { useEffect } from 'react'


function App() {
  useEffect(() => {
      if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register(`/sw-register.js`, { scope: '/uv/' }).then(
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
      <div className="mt-8 sm:mt-12 lg:mt-16 relative flex justify-center">
        <div id="Glow" className="shadow-glow w-full max-w-xs sm:max-w-sm lg:max-w-md"/>
          <form id="urlForm">
        <input id="address" onClick="text" placeholder="Browse the web freely" className="w-full max-w-xs sm:max-w-sm lg:max-w-md bg-[#181818] text-base text-[rgba(235,_235,_245,_0.6)] py-3 px-4 rounded-lg outline-none"/>
          </form>
      </div>
</>
)

}



export default App
