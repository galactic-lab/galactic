import { useNavigate } from "react-router-dom";
function RedirectToProccy() {
    const navigate = useNavigate();
    navigate('/view');
}

function Proccy(encodedSrc) {
    RedirectToProccy();
    return (<iframe src={"/uv/" + encodedSrc} className="w-full h-screen"/>);
}
export default Proccy