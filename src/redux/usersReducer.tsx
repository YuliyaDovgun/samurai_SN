import {Dispatch} from "redux";
import {usersApi} from "../api/users-api";

const initState = {
    users: [] as userDomainType[],
    page: 1,
    totalCount: 0,
    countOnThePage: 5,
    isFetching: false,
}

export const usersReducer = (state = initState, action: usersActionType): initStateType => {
    switch (action.type){
        case 'USERS/FOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
        case 'USERS/UNFOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case 'USERS/SET_USERS': {
            return {...state, users: action.users.map(u => ({...u, userEntityStatus: 'idle'}))}
        }
        case 'USERS/SET_CURRENT_PAGE': {
            return {...state, page: action.currentPage}
        }
        case 'USERS/SET_TOTAL_COUNT_USERS': {
            return {...state, totalCount: action.totalCount}
        }
        case 'USERS/IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case "USERS/CHANGE-STATUS": {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, userEntityStatus: action.userEntityStatus} : u)}
        }
    }
    return state
}
export const followAC = (userId: string) => ({
    type: 'USERS/FOLLOW', userId
} as const)
export const unFollowAC = (userId: string) => ({
    type: 'USERS/UNFOLLOW', userId
} as const)
export const setUsersAC = (users: userType[]) => ({
    type: 'USERS/SET_USERS', users
} as const)
export const setCurrentPageAC = (currentPage: number) => ({
    type: 'USERS/SET_CURRENT_PAGE', currentPage
} as const)
export const setTotalCountUsersAC = (totalCount: number) => ({
    type: 'USERS/SET_TOTAL_COUNT_USERS', totalCount
} as const)
export const changeIsFetchingAC = (isFetching: boolean) => ({
    type: 'USERS/IS_FETCHING', isFetching
} as const)
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
export type appStatusType = 'idle' | 'success' | 'failed' | 'loading'
export type initStateType = typeof initState
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

type followActionType = ReturnType<typeof followAC>
type unFollowActionType = ReturnType<typeof unFollowAC>
type setUsersActionType = ReturnType<typeof setUsersAC>
type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type setTotalCountUsersActionType = ReturnType<typeof setTotalCountUsersAC>
type changeIsFetchingActionType = ReturnType<typeof changeIsFetchingAC>
type changeStatusActionType = ReturnType<typeof changeUserEntityStatusAC>

type usersActionType =
    followActionType
    | unFollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalCountUsersActionType
    | changeIsFetchingActionType
    | changeStatusActionType
