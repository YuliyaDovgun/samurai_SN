const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT_USERS = "SET_TOTAL_COUNT_USERS"
const IS_FETCHING = "IS_FETCHING"
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
export type initStateType = {
    users: userType[]
    page: number
    totalCount: number
    countOnThePage: number
    isFetching: boolean
}
const initState: initStateType = {
    users: [],
    page: 1,
    totalCount: 0,
    countOnThePage: 5,
    isFetching: false
}

type usersActionType = followActionType | unFollowActionType | setUsersActionType
| setCurrentPageActionType | setTotalCountUsersActionType | changeIsFetchingActionType
export const usersReducer = (state: initStateType = initState, action: usersActionType): initStateType => {
    switch (action.type){
        case FOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case SET_USERS: {
            return {...state, users: [...action.users]}
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
export const setCurrentPageAC = (currentPage: number): setCurrentPageActionType => ({
    type: SET_CURRENT_PAGE, currentPage
})
export const setTotalCountUsersAC = (totalCount: number): setTotalCountUsersActionType => ({
    type: SET_TOTAL_COUNT_USERS, totalCount
})
export const changeIsFetchingAC = (isFetching: boolean): changeIsFetchingActionType => ({
    type: IS_FETCHING, isFetching
})