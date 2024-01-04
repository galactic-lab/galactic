import { urlType } from "/public/tools.js";

function Proccy() {
  // Get the encoded source from the URL query parameter
  const searchParams = new URLSearchParams(window.location.search);
  const src = searchParams.get("src");
  let encodedSrc = urlType(src);

  return <iframe src={`/site/${encodedSrc}`} className="w-full h-screen" />;
}

export default Proccy;
