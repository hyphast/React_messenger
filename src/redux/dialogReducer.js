const ADD_MESSAGE = 'dialog/ADD-MESSAGE';

let stateInitial = {
    dialogsData: [
        {id: 1, name: 'Oleg'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Kolya'},],
    dialogs_messagesData: [
        {id: 1, message: 'Hello, how r u?'},
        {id: 2, message: 'I\' fine'},
        {id: 3, message: 'And u?'},],
}

const dialogReducer = (state = stateInitial, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: action.message,
            };
            return {
                ...state,
                dialogs_messagesData: [...state.dialogs_messagesData, newMessage],
            }
        }
        default: return state;
    }
}


export const addMessage = (message) => ({ type: ADD_MESSAGE, message })

export default dialogReducer;