import { UPDATE_USER, REMOVE_USER} from './types';

export const removeUser = index => ({
    type: REMOVE_USER,
    payload: index,
});

export const updateUser = (index, user) => ({
    type: UPDATE_USER,
    payload: { index, user },
});