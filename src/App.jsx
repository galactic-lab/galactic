import "./index.css";
import { useNavigate } from "react-router-dom";
import { encodeXor } from "/public/tools.js";
import NavBar from "./Navbar.jsx";

function App() {
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    const address = document.getElementById("address").value;
    const encodedSrc = encodeXor(address);
    navigate(`/view?src=${encodedSrc}`);
  }
  return (
    <>
      <NavBar />
      <div className="absolute flex-col mt-16">
          <form id="urlForm" onSubmit={handleSearch}>
            <input
              id="address"
              placeholder="Browse the web freely"
              className="w-200 h-20 max-w-xs bg-[#181818] text-white text-md py-3 px-4 rounded-lg outline-none"
            />
          </form>
      </div>
    </>
  );
}

export default App;
