const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let stateInitial = {
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

const dialogReducer = (state = stateInitial, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.messageNewText,
            };
            return {
                ...state,
                dialogs_messagesData: [...state.dialogs_messagesData, newMessage],
                messageNewText: '',
            }
        }
        case UPDATE_NEW_MESSAGE: {
            return {
                ...state,
                messageNewText: action.newText,
            }
        }
        default: return state;
    }
}


export const addMessageCreator = () => ({ type: ADD_MESSAGE })

export const updateMessageCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text});

export default dialogReducer;