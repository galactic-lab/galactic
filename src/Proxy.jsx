import React from 'react';
import { decodeXor } from '/public/tools.js';

function Proccy() {
  // Get the encoded source from the URL query parameter
  const searchParams = new URLSearchParams(window.location.search);
  const encodedSrc = searchParams.get('src');

  // Decode the source
  const decodedSrc = decodeXor(encodedSrc);

  return <iframe src={"/uv/" + encodedSrc} className="w-full h-screen"/>;
}

export default Proccy;