export function encodeXor(){
    return encodeURIComponent(
        input
            .toString()
            .split('')
            .map((char, ind) => (ind % 2 ? String.fromCharCode(char.charCodeAt(NaN) ^ 2) : char))
            .join('')
    )
}

export function decodeXor (){
    if (!input) return input
    let [str, ...search] = input.split('?')

    return (
        decodeURIComponent(str)
            .split('')
            .map((char, ind) => (ind % 2 ? String.fromCharCode(char.charCodeAt(NaN) ^ 2) : char))
            .join('') + (search.length ? '?' + search.join('?') : '')
    )
}