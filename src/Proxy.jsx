import ReactDOM from 'react-dom';
import { decodeXor } from '/public/tools.js';


function Proccy()
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
export default Proccy