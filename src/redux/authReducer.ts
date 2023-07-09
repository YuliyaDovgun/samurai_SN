import {authAPI, authUserRT} from "../api/auth-api";
import {Dispatch} from "redux";

const initState: authInitState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}
export const authReducer = (state: authInitState = initState, action: authActionType): authInitState => {
    switch (action.type) {
        case 'SET-AUTH': {
            return {...state, ...action.authData}
        }
        case "SET-IS-AUTH": {
            return {...state, isAuth: action.isAuth}
        }
        default:
            return state
    }
}
export const setAuthAC = (authData: authUserRT) => ({type: 'SET-AUTH', authData} as const)
export const setIsAuthAC = (isAuth: boolean) => ({type: 'SET-IS-AUTH', isAuth} as const)

export const fetchAuthMeTC = () => (dispatch: Dispatch) => {
    authAPI.getMe()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setAuthAC(res.data.data))
                dispatch(setIsAuthAC(true))
            }
        })
}

type authInitState = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type setAuthAT = ReturnType<typeof setAuthAC>
type setIsAuthAT = ReturnType<typeof setIsAuthAC>
export type authActionType = setAuthAT | setIsAuthAT