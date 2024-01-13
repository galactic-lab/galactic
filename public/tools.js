export function encodeXor(input) {
  return encodeURIComponent(
    input
      .toString()
      .split("")
      .map((char, ind) =>
        ind % 2 ? String.fromCharCode(char.charCodeAt(NaN) ^ 2) : char,
      )
      .join(""),
  );
}

export function decodeXor(input) {
  if (!input) return input;
  let [str, ...search] = input.split("?");

  return (
    decodeURIComponent(str)
      .split("")
      .map((char, ind) =>
        ind % 2 ? String.fromCharCode(char.charCodeAt(NaN) ^ 2) : char,
      )
      .join("") + (search.length ? "?" + search.join("?") : "")
  );
}
export function urlType(input) {
  let decoded = decodeXor(input);
  if (decoded.includes(".")) {
    return encodeXor("https://") + encodeXor(decoded);
  } else {
    let encodedSearch = `https://google.com/search?q=${decoded}`;
    return encodeXor(encodedSearch);
  }
}
