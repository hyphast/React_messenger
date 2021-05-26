import profileReducer from "../profileReducer";
import dialogReducer from "../dialogReducer";

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
       this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
       this._state.DialogPage = dialogReducer(this._state.DialogPage, action);
       this._callSubscriber(this._state);
    }

}

window.store = store;

// export default store;