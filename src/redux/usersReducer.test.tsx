import {
    appStatusType,
    changeIsFetchingAC, changeUserEntityStatusAC,
    followAC,
    initStateType,
    setCurrentPageAC,
    setTotalCountUsersAC,
    setUsersAC,
    unFollowAC,
    usersReducer
} from "./usersReducer";

let state: initStateType
    beforeEach(() => {
        state = {
            users:  [
                {
                    name: "Yuliya Dovgun",
                    id: "1",
                    uniqueUrlName: "",
                    photos: {
                        small: "smallPhotos_u1",
                        large: "",
                    },
                    status: "I'm frontend developer",
                    followed: true,
                    userEntityStatus: 'idle',
                },
                {
                    name: "Super model",
                    id: "2",
                    uniqueUrlName: "",
                    photos: {
                        small: "smallPhotos_u2",
                        large: "",
                    },
                    status: "I'm super-puper from Paris",
                    followed: false,
                    userEntityStatus: 'idle',
                },],
            page: 1,
            totalCount: 0,
            countOnThePage: 5,
            isFetching: false,
        }
    })

test('user should be followed', () => {
    let newState = usersReducer(state, followAC("2"))

    expect(state.users[1].followed).toBe(false)
    expect(newState.users[0].followed).toBe(true)
    expect(newState.users[1].followed).toBe(true)
})
test('user should be unFollowed', () => {
    let newState = usersReducer(state, unFollowAC("1"))

    expect(state.users[0].followed).toBe(true)
    expect(newState.users[0].followed).toBe(false)
    expect(newState.users[1].followed).toBe(false)
})
test('users should be set', () => {
    let newState = usersReducer(state, setUsersAC(state.users))

    expect(newState.users.length).toBe(2)
})
test('change currentPage number', () => {
    let newState = usersReducer(state, setCurrentPageAC(2))

    expect(newState.page).toBe(2)
})
test('set totalCount users', () => {
    let newState = usersReducer(state, setTotalCountUsersAC(21))

    expect(newState.totalCount).toBe(21)
})
test('change isFetching', () => {
    let newState = usersReducer(state, changeIsFetchingAC(true))

    expect(newState.isFetching).toBe(true)
})
test('userEntityStatus should be changed', () => {

    let newUserEntityStatus: appStatusType = 'success'

    let newState = usersReducer(state, changeUserEntityStatusAC('2', newUserEntityStatus))

    expect(newState.users[1].userEntityStatus).toBe('success')
})