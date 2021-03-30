const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

let stateInitial = {
    postsData: [
        {id: 1, post: 'My first post', likesCount: 2},
        {id: 2, post: 'Hi', likesCount: 7},
        {id: 3, post: 'Hello', likesCount: 1},],
    postNewText: '',
}

const profileReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                post: state.postNewText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                postNewText: '',
            };
        }
        case UPDATE_NEW_TEXT: {
            return {
                ...state,
                postNewText: action.newText,
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT, newText: text});

export default profileReducer;