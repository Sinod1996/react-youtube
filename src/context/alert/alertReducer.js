import {HIDE_AlERT, SHOW_AlERT} from "../types";

const handlers = {
    [SHOW_AlERT]: (state, {payload}) => ({...payload, visible: true}),
    [HIDE_AlERT]: state => ({...state, visible: false),
    DEFAULT: state => state
}
export const alertReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}


