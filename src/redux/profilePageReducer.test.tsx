import {addPostAC, profilePageReducer, setPostTextAC} from "./profilePageReducer";
import {profilePageType} from "./state";

let state: profilePageType

beforeEach(() => {
    state = {
        postText: '',
        posts: [
            {id: '1', message: 'Hello, word!', likesCount: 5},
            {id: '2', message: 'How are your?', likesCount: 10},
            {id: '3', message: 'Wonderful day', likesCount: 15},
        ],
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
