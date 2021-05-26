import profilePageReducer, {addPost, deletePost} from "./profileReducer";

let stateInitial = {
    postsData: [
        {id: 1, post: 'My first post', likesCount: 2},
        {id: 2, post: 'Hi', likesCount: 7},
        {id: 3, post: 'Hello', likesCount: 1}]
}

it('Posts length should be incremented', () => {
    let action = addPost('Hello world')

    let newState = profilePageReducer(stateInitial, action)

    expect(newState.postsData.length).toBe(4)
})

it('Message of new post should be correct', () => {
    let action = addPost('Hello world')

    let newState = profilePageReducer(stateInitial, action)

    expect(newState.postsData[0].post).toBe('Hello world')
})

it('after deleting posts lengths should be decremented', () => {
    let action = deletePost(2)

    let newState = profilePageReducer(stateInitial, action)

    expect(newState.postsData.length).toBe(2)
})