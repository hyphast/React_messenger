const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {
    _state:  {
        ProfilePage: {
            postsData: [
                {id: 1, post: 'My first post', likesCount: 2},
                {id: 2, post: 'Hi', likesCount: 7},
                {id: 3, post: 'Hello', likesCount: 1},],
            postNewText: '',
        },
        DialogPage: {
            dialogsData: [
                {id: 1, name: 'Oleg'},
                {id: 2, name: 'Ivan'},
                {id: 3, name: 'Kolya'},],
            dialogs_messagesData: [
                {id: 1, message: 'Hello, how r u?'},
                {id: 2, message: 'I\' fine'},
                {id: 3, message: 'And u?'},],
            messageNewText: '',
        }
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch(action.type) {
            case ADD_POST:
                let newPost = {
                    id: 4,
                    post: this._state.ProfilePage.postNewText,
                    likesCount: 0
                };
                this._state.ProfilePage.postsData.push(newPost);
                this._state.ProfilePage.postNewText = '';
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_TEXT:
                this._state.ProfilePage.postNewText = action.newText;
                this._callSubscriber(this._state);
                break;
            case ADD_MESSAGE:
                let newMessage = {
                    id: 4,
                    message: this._state.DialogPage.messageNewText,
                };
                this._state.DialogPage.dialogs_messagesData.push(newMessage);
                this._state.DialogPage.messageNewText = '';
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_MESSAGE:
                this._state.DialogPage.messageNewText = action.newText;
                this._callSubscriber(this._state);
                break;
        }
    }

}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT, newText: text});

export const addMessageCreator = () => ({ type: ADD_MESSAGE })

export const updateMessageCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text});

window.store = store;

export default store;