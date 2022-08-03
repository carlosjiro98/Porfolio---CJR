const initialState = {
    count: 1,
    show: "0",
    showA: "0",
    showW: "0",
    showC: "0"
}

export default function reducer (state = initialState, {type, payload}) {
    switch (type) {
        case "inc": return {...state, count: state.count + 1}
        case "dec": return {...state, count: state.count - 1}
        case "show": return {...state, show: payload}
        case "showA": return {...state, showA: payload}
        case "showW": return {...state, showW: payload}
        case "showC": return {...state, showC: payload}
        default: return state;
    }
}