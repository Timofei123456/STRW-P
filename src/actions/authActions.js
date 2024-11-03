import {SIGNIN_USER, SIGNOUT_USER, SIGNERROR_USER} from "./types";


export const signInUser = user => ({
    type: SIGNIN_USER,
    payload: user,
});

export const signOutUser = () => ({
    type: SIGNOUT_USER
});

export const signErrorUser = (error) => ({
    type: SIGNERROR_USER,
    payload: error.message,
});

export const signIn = (username, password) => {
    return (dispatch, getState) => {
        try {
            const { users } = getState().user;
            const user = users.find(
                u => u.username === username && u.password === password
            );
            
            if (user) {
                dispatch(signInUser({ username }));
                return true;
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (error) {
            dispatch(signErrorUser(error));
            return false;
        }
    };
};