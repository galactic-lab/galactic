import ReactDOM from 'react-dom';
import { decodeXor } from '/public/tools.js';
import {useNavigate} from "react-router-dom";


export default function Proxy ()
{
    const navigate = useNavigate();

    function IframeWithDecodedSource({ encodedSrc }) {
        const decodedSrc = decodeXor(encodedSrc);

  return <iframe src={decodedSrc} />;
}

const encodedSrc = 'encoded_source_url';

    ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <IframeWithDecodedSource encodedSrc={encodedSrc} />

    </>
)}
