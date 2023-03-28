import {followAC, setUsersAC, unFollowAC, usersReducer, userType} from "./usersReducer";

let state: userType[]
    beforeEach(() => {
        state = [
            {
                name: "Yuliya Dovgun",
                id: "1",
                uniqueUrlName: "",
                photos: {
                    small: "smallPhotos_u1",
                    large: "",
                },
                status: "I'm frontend developer",
                followed: true
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
                followed: false
            },]
    })

test('user should be followed', () => {
    let newState = usersReducer(state, followAC("2"))

    expect(state[1].followed).toBe(false)
    expect(newState[0].followed).toBe(true)
    expect(newState[1].followed).toBe(true)
})
test('user should be unFollowed', () => {
    let newState = usersReducer(state, unFollowAC("1"))

    expect(state[0].followed).toBe(true)
    expect(newState[0].followed).toBe(false)
    expect(newState[1].followed).toBe(false)
})
test('users should be set', () => {
    let newState = usersReducer(state, setUsersAC(state))

    expect(newState.length).toBe(4)
})