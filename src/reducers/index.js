import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    userState: userReducer,
    authState: authReducer,
});

export default rootReducer;