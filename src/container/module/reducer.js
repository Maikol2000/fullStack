import { AUTH_SIGN_UP_FAIL, AUTH_SIGN_UP_REQUEST, AUTH_SIGN_UP_SUCCESS } from "./type";

const initialState = {
    daDangKy: null,
    loading: false,
    error: null
}

export const dangKyReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case AUTH_SIGN_UP_REQUEST:
            return { ...state, loading: true }
        case AUTH_SIGN_UP_SUCCESS:
            return { ...state, loading: false, daDangKy: payload, error: null }
        case AUTH_SIGN_UP_REQUEST:
            return { ...state, loading: false, daDangKy: null, error: payload }

        default:
            return state
    }
}
