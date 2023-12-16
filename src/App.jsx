import './index.css';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGear,faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
      <>
      <div className="mt-8 sm:mt-12 lg:mt-16 relative flex justify-center">
        <div id="Glow" className="shadow-glow w-full max-w-xs sm:max-w-sm lg:max-w-md"/>
        <input type="text" placeholder="Browse the web freely"
               className="w-full max-w-xs sm:max-w-sm lg:max-w-md bg-[#181818] text-base text-[rgba(235,_235,_245,_0.6)] py-3 px-4 rounded-lg outline-none"/>
      </div>
</>
)
  ;
}

export default App
