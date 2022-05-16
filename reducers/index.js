import { combineReducers } from "redux";
import users from './Reducer/authReducer'
import posts from './Reducer/postReducer'
import cotizaciones from './Reducer/cotizacionReducers'

const reducer = combineReducers({users, posts, cotizaciones})

export default reducer