const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
export type userType =  {
    name: string
    id: number | string
    uniqueUrlName?: string
    photos: {
        small?: string
        large?: string
    },
    status?: string
    followed: boolean
}

type followActionType = {
    type: "FOLLOW"
    userId: number | string
}
type unFollowActionType = {
    type: "UNFOLLOW"
    userId: number | string
}
type setUsersActionType = {
    type: "SET_USERS"
    users: userType[]
}
const initState: userType[] =  []

type usersActionType = followActionType | unFollowActionType | setUsersActionType
export const usersReducer = (state = initState, action: usersActionType): userType[] => {
    switch (action.type){
        case FOLLOW: {
            return state.map(u => u.id === action.userId ? {...u, followed : true} : u)
        }
        case UNFOLLOW: {
            return state.map(u => u.id === action.userId ? {...u, followed : false} : u)
        }
        case SET_USERS: {
            return [...state, ...action.users]
        }
    }
    return state
}
export const followAC = (userId: number | string): followActionType => ({
    type: FOLLOW, userId
})
export const unFollowAC = (userId: number | string): unFollowActionType => ({
    type: UNFOLLOW, userId
})
export const setUsersAC = (users: userType[]): setUsersActionType => ({
    type: SET_USERS, users
})