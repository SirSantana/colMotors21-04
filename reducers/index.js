import { combineReducers } from "redux";
import users from './Reducer/authReducer'
import posts from './Reducer/postReducer'

const reducer = combineReducers({users, posts})

export default reducer