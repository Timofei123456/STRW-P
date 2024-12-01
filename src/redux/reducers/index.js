import { combineReducers } from 'redux';
import userReducer from '../slicers/userSlice';
import authReducer from "../slicers/authSlice";
import clientReducer from "../slicers/clientSlice";
import accountReducer from "../slicers/accountSlice";
import transactionReducer from "../slicers/transactionSlice";

const rootReducer = combineReducers({
    userState: userReducer,
    authState: authReducer,
    clientState: clientReducer,
    accountState: accountReducer,
    transactionState: transactionReducer,
});

export default rootReducer;