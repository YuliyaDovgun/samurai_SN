import {addPostAC, initStateType, profilePageReducer, setPostTextAC, setProfileInfo} from "./profilePageReducer";

let state: initStateType

beforeEach(() => {
    state = {
        postText: '',
        posts: [
            {id: '1', message: 'Hello, word!', likesCount: 5},
            {id: '2', message: 'How are your?', likesCount: 10},
            {id: '3', message: 'Wonderful day', likesCount: 15},
        ],
        profileInfo: {
            aboutMe: 'Super',
            userId: 2,
            lookingForAJob: true,
            lookingForAJobDescription: 'I want many money',
            fullName: 'Blabla',
            photos: {
                small: '',
            }
        }
    }
})

test('post should be added', () => {
    const message = 'New Post'

    const newState = profilePageReducer(state, addPostAC(message))

    expect(state.posts.length).toBe(3)
    expect(newState.posts.length).toBe(4)
    expect(newState.posts[0].message).toBe('New Post')
})
test('post text should be set', () => {
    const message = 'New Post Text'

    const newState = profilePageReducer(state, setPostTextAC(message))

    expect(state.postText).toBe('')
    expect(newState.postText).toBe('New Post Text')
})
test('profileInfo should be set', () => {
    const profileInfo = {
        aboutMe: 'new status',
        userId: 3,
        lookingForAJob: true,
        lookingForAJobDescription: 'new description',
        fullName: 'new fullName',
        photos: {
            small: 'new photo',
        }
    }

    const newState = profilePageReducer(state, setProfileInfo(profileInfo))

    expect(state.profileInfo?.aboutMe).toBe('Super')
    expect(newState.profileInfo?.aboutMe).toBe('new status')
    expect(newState.profileInfo?.userId).toBe(3)
    expect(newState.profileInfo?.lookingForAJob).toBe(true)
    expect(newState.profileInfo?.lookingForAJobDescription).toBe('new description')
    expect(newState.profileInfo?.fullName).toBe('new fullName')
    expect(newState.profileInfo?.photos.small).toBe('new photo')
})
