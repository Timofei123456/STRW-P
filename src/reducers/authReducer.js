import { SIGNIN_USER, SIGNOUT_USER, SIGNERROR_USER } from "../actions/types";

const initialState = {
    isAuthenticated: false,
    user: null,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                error: null
            };
        case SIGNOUT_USER:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: null
            };
        case SIGNERROR_USER:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default authReducer;