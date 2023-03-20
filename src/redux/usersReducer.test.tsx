import {followAC, setUsersAC, unFollowAC, usersReducer, userType} from "./usersReducer";

let state: userType[]
    beforeEach(() => {
        state = [
            {
                id: "1",
                photo: "",
                followed: true,
                fullName: "Yuliya Dovgun",
                status: "I'm frontend developer",
                address: {country: "Belarus", city: "Minsk"}
            },
            {
                id: "2",
                photo: "",
                followed: false,
                fullName: "Super model",
                status: "I'm super-puper from Paris",
                address: {country: "Belarus", city: "Paris"}
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