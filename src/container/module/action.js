import api from "../../config/api";
import { AUTH_SIGN_UP_FAIL, AUTH_SIGN_UP_REQUEST, AUTH_SIGN_UP_SUCCESS } from "./type";

const actAuthSignUpRequest = () => ({
    type: AUTH_SIGN_UP_REQUEST
})
const actAuthSignUpSuccess = (i) => ({
    payload: i,
    type: AUTH_SIGN_UP_SUCCESS
})
const actAuthSignUpFail = (e) => ({
    payload: e,
    type: AUTH_SIGN_UP_FAIL
})

export const actAuthSignUp = (userData) => {
    return async dispatch => {
        dispatch(actAuthSignUpRequest)
        try {
            const data = await api.dangKy(userData)
            console.log(data.data)
            dispatch(actAuthSignUpSuccess(data))
        } catch (error) {
            dispatch(actAuthSignUpFail(error))
        }
    }
}