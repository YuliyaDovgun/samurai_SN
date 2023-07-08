import {instance} from "./instance";

export const usersApi = {
    getUsers: (page: number, countOnThePage: number) => {
        return instance.get(`/users?page=${page}&count=${countOnThePage}`)
            .then(res => res.data)
    },

    follow: (userId: string) => {
        return instance.post<followRT>(`/follow/${userId}`)
            .then(res => res.data)
    },
    unFollow: (userId: string) => {
        return instance.delete<followRT>(`/follow/${userId}`)
            .then(res => res.data)
    },
}
type followRT = {
    resultCode: number
    messages: string[]
    data: {}
}