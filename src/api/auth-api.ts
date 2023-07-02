import {instance} from "./instance";

export const authAPI = {
    getMe: () => {
        return instance.get<authRT<{data: authUserRT}>>('auth/me')
    }
}
export type authUserRT = {
    id: number
    email: string
    login: string
}
type authRT<D = {}> = {
    resultCode: number
    messages: string[],
    data: D
}