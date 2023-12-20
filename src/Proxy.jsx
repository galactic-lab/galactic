function Proccy() {
    // Get the encoded source from the URL query parameter
    const searchParams = new URLSearchParams(window.location.search);
    const encodedSrc = searchParams.get('src');

    // Decode the source

    return <iframe src={`/site/${encodedSrc}`} className="w-full h-screen"/>;
}

export default Proccy;