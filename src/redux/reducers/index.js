import { combineReducers } from 'redux';
import userReducer from '../slices/userSlice';
import authReducer from "../slices/authSlice";
import clientReducer from "../slices/clientSlice";
import accountReducer from "../slices/accountSlice";
import transactionReducer from "../slices/transactionSlice";

const rootReducer = combineReducers({
    userState: userReducer,
    authState: authReducer,
    clientState: clientReducer,
    accountState: accountReducer,
    transactionState: transactionReducer,
});

export default rootReducer;