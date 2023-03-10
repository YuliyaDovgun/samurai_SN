import {addMessageAC, messagesPageReducer, setMessageTextAC} from "./messagesPageReducer";
import {messagesPageType} from "./state";

let state: messagesPageType

beforeEach(() => {
    state =  {
            usersNames: [
                {name: 'Sveta', id: '1'},
                {name: 'Lena', id: '2'},
                {name: 'Vika', id: '3'},
                {name: 'Natasha', id: '4'},
            ],
            messageText: '',
            messages: [
                {id: '1', message: 'Hello!'},
                {id: '2', message: 'How are you'},
                {id: '3', message: 'My boss is jerk'},
            ],
        }
})

test('message should be added', () => {
    const message = 'New Message'

    const newState = messagesPageReducer(state, addMessageAC(message))

    expect(state.messages.length).toBe(3)
    expect(newState.messages.length).toBe(4)
    expect(newState.messages[0].message).toBe('New Message')
})
test('message text should be set', () => {
    const message = 'New Message Text'

    const newState = messagesPageReducer(state, setMessageTextAC(message))

    expect(state.messageText).toBe('')
    expect(newState.messageText).toBe('New Message Text')
})
