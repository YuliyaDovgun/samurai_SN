import {instance} from "./instance";

export const usersApi = {
    follow: (userId: string) => {
        return instance.post<followRT>(`/follow/${userId}`)
    },
    unFollow: (userId: string) => {
        return instance.delete<followRT>(`/follow/${userId}`)
    }
}
type followRT = {
    resultCode: number
    messages: string[]
    data: {}
}