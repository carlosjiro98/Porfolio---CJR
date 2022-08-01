
export function inc () {
    return {type: "inc"}
}
export function dec () {
    return {type: "dec"}
}

export function show (tf) {
    return {
        type: "show",
        payload: tf
    }
}
export function showA (tf) {
    return {
        type: "showA",
        payload: tf
    }
}