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
const initState: userType[] =  [
        {
            id: v1(),
            photo: "",
            followed: true,
            fullName: "Yuliya Dovgun",
            status: "I'm frontend developer",
            address: {country: "Belarus", city: "Minsk"}
        },
        {
            id: v1(),
            photo: "",
            followed: false,
            fullName: "Super model",
            status: "I'm super-puper from Paris",
            address: {country: "Belarus", city: "Paris"}
        },
        {
            id: v1(),
            photo: "",
            followed: true,
            fullName: "AKA_48",
            status: "777",
            address: {country: "Russia", city: "Moscow"}
        }]

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