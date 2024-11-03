import {SIGNIN_USER, SIGNOUT_USER} from "./types";

export const signInUser = user => ({
    type: SIGNIN_USER,
    payload: user,
});

export const signOutUser = () => ({
    type: SIGNOUT_USER
});

export const signIn = (username, password) => {
    return (dispatch, getState) => {
        try {
            const { users } = getState().userState;
            const user = users.find(
                u => u.username === username && u.password === password
            );
            
            if (user) {
                dispatch(signInUser({ username }));
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    };
};