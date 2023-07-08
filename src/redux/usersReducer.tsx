import {Dispatch} from "redux";
import {usersApi} from "../api/users-api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT_USERS = "SET_TOTAL_COUNT_USERS"
const IS_FETCHING = "IS_FETCHING"
export type userType =  {
    name: string
    id: string
    uniqueUrlName?: string
    photos: {
        small?: string
        large?: string
    },
    status?: string
    followed: boolean
}
export type userDomainType = userType & {userEntityStatus : appStatusType}

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
type setCurrentPageActionType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
type setTotalCountUsersActionType = {
    type: "SET_TOTAL_COUNT_USERS"
    totalCount: number
}
type changeIsFetchingActionType = {
    type: "IS_FETCHING"
    isFetching: boolean
}
type changeStatusActionType = ReturnType<typeof changeUserEntityStatusAC>
export type initStateType = typeof initState
const initState = {
    users: [] as userDomainType[],
    page: 1,
    totalCount: 0,
    countOnThePage: 5,
    isFetching: false,
}
export type appStatusType = 'idle' | 'success' | 'failed' | 'loading'

type usersActionType = followActionType | unFollowActionType | setUsersActionType
| setCurrentPageActionType | setTotalCountUsersActionType | changeIsFetchingActionType
| changeStatusActionType
export const usersReducer = (state = initState, action: usersActionType): initStateType => {
    switch (action.type){
        case FOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case SET_USERS: {
            return {...state, users: action.users.map(u => ({...u, userEntityStatus: 'idle'}))}
        }
        case SET_CURRENT_PAGE: {
            return {...state, page: action.currentPage}
        }
        case SET_TOTAL_COUNT_USERS: {
            return {...state, totalCount: action.totalCount}
        }
        case IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case "USERS/CHANGE-STATUS": {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, userEntityStatus: action.userEntityStatus} : u)}
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
export const setCurrentPageAC = (currentPage: number): setCurrentPageActionType => ({
    type: SET_CURRENT_PAGE, currentPage
})
export const setTotalCountUsersAC = (totalCount: number): setTotalCountUsersActionType => ({
    type: SET_TOTAL_COUNT_USERS, totalCount
})
export const changeIsFetchingAC = (isFetching: boolean): changeIsFetchingActionType => ({
    type: IS_FETCHING, isFetching
})
export const changeUserEntityStatusAC = (userId: string, userEntityStatus: appStatusType) => ({
    type: 'USERS/CHANGE-STATUS', userId, userEntityStatus
} as const)

export const followTC = (userId: string) => (dispatch: Dispatch) => {
    dispatch(changeUserEntityStatusAC(userId, 'loading'))
    usersApi.follow(userId)
        .then(res => {
            if(res.resultCode === 0) {
                dispatch(changeUserEntityStatusAC(userId,'success'))
                dispatch(followAC(userId))
            } else {
                dispatch(changeUserEntityStatusAC(userId,'failed'))
            }
        })
}
export const unFollowTC = (userId: string) => (dispatch: Dispatch) => {
    dispatch(changeUserEntityStatusAC(userId,'loading'))
    usersApi.unFollow(userId)
        .then(res => {
            if(res.resultCode === 0) {
                dispatch(changeUserEntityStatusAC(userId,'success'))
                dispatch(unFollowAC(userId))
            } else {
                dispatch(changeUserEntityStatusAC(userId, 'failed'))
            }
        })
}