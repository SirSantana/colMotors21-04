import { combineReducers } from "redux";
import users from './Reducer/authReducer'


const reducer = combineReducers({users})

export default reducer