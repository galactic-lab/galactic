import './index.css';
import {encodeXor} from "/public/tools.js";


function App() {

    function handleSearch(e) {
        e.preventDefault()
        const address = document.getElementById('address').value
        let  encodedSrc = encodeXor(address)
        Proccy(encodedSrc)
    }
  return (
      <>
      <div className="mt-8 sm:mt-12 lg:mt-16 relative flex justify-center">
        <div id="Glow" className="shadow-glow w-full max-w-xs sm:max-w-sm lg:max-w-md"/>
          <form id="urlForm" onSubmit={handleSearch}>
          <input id="address" placeholder="Browse the web freely" className="w-full max-w-xs sm:max-w-sm lg:max-w-md bg-[#181818] text-base text-[rgba(235,_235,_245,_0.6)] py-3 px-4 rounded-lg outline-none"/>
          </form>
      </div>
</>
)

}



export default App
