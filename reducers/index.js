import { combineReducers } from "redux";
import users from './reducer/authReducer'
import posts from './reducer/postReducer'

const reducer = combineReducers({users, posts})

export default reducer