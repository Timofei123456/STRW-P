import { UPDATE_USER, REMOVE_USER } from '../actions/types';

const initialState = {
    users: [
        { id: 1, username: "1", password: "1" },
        { id: 2, username: "user1", password: "123" }
    ]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter((_, index) => index !== action.payload)
            };
        case UPDATE_USER:
            const updatedUsers = [...state.users];
            updatedUsers[action.payload.index] = action.payload.user;
            return {
                ...state,
                users: updatedUsers
            };
        default:
            return state;
    }
};


export default userReducer;