import {v1} from "uuid";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
export type userType = {
    id: string,
    photo: string
    followed: boolean,
    fullName: string,
    status: string,
    address: {
        country: string
        city: string
    }
}

type followActionType = {
    type: "FOLLOW"
    userId: string
}
type unFollowActionType = {
    type: "UNFOLLOW"
    userId: string
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
export const followAC = (userId: string): followActionType => ({
    type: FOLLOW, userId
})
export const unFollowAC = (userId: string): unFollowActionType => ({
    type: UNFOLLOW, userId
})
export const setUsersAC = (users: userType[]): setUsersActionType => ({
    type: SET_USERS, users
})