import { urlType } from "/public/tools.js";

function Proccy() {
  // Get the encoded source from the URL query parameter
  const searchParams = new URLSearchParams(window.location.search);
  const src = searchParams.get("src");
  let encodedSrc = urlType(src);

  return <iframe src={`/site/${encodedSrc}`} className="absolute w-screen h-screen top-0 right-0 bottom-0 left-0 border-none p-0" />;
}

export default Proccy;
