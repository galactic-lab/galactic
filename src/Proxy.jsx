import ReactDOM from 'react-dom';
import { decodeXor } from '/public/tools.js';


export default function Proxy ()
{
    function IframeWithDecodedSource({ encodedSrc }) {
    const decodedSrc = decodeXor(encodedSrc);

  return <iframe src={decodedSrc} />;
}

const encodedSrc = 'encoded_source_url';

    ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <IframeWithDecodedSource />

    </>
)}
