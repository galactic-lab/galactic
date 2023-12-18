export function encodeXor(input){
    return encodeURIComponent(
        input
            .toString()
            .split('')
            .map((char, ind) => (ind % 2 ? String.fromCharCode(char.charCodeAt(NaN) ^ 2) : char))
            .join('')
    )
}

export function decodeXor (input){
    if (!input) return input
    let [str, ...search] = input.split('?')

    return (
        decodeURIComponent(str)
            .split('')
            .map((char, ind) => (ind % 2 ? String.fromCharCode(char.charCodeAt(NaN) ^ 2) : char))
            .join('') + (search.length ? '?' + search.join('?') : '')
    )
}
export function formatSearch(input) {
    try {
        return new URL(input).toString()
    } catch (e) {}

    try {
        const url = new URL(`https://${input}`)
        if (url.hostname.includes('.')) return url.toString()
    } catch (e) {}

    return new URL(`https://google.com/search?q=${input}`).toString()
}
