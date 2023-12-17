export function xorEncode(inputString) {
    let key = 93474; // Constant key
    let encodedString = "";
    for (let char of inputString) {
        let encodedChar = String.fromCharCode(char.charCodeAt(0) ^ key); // XOR operation
        encodedString += encodedChar;
    }
    return encodedString;
}

export function xorDecode(encodedString) {
    let key = 93474; // Same constant key
    let decodedString = "";
    for (let char of encodedString) {
        let decodedChar = String.fromCharCode(char.charCodeAt(0) ^ key); // XOR operation
        decodedString += decodedChar;
    }
    return decodedString;
}