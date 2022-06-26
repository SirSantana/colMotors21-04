import { AUTH, FORGOTPASSWORD, GETUSER, GETUSERS, LOGOUT, UPDATEPASSWORD } from "../type";


// eslint-disable-next-line import/no-anonymous-default-export
export default (state={authData: null ,users:[]}, action)=>{
    switch (action.type) {
        case AUTH:
            localStorage.clear()
            localStorage.setItem('profile', JSON.stringify({...action?.data}))
            return {...state, authData: action.data}
        case LOGOUT:
            localStorage.clear()
            return {...state, authData: null}
        case GETUSERS:
            return {...state, users: action.payload}
        case GETUSER:
            return {...state, user: action.payload}
        case FORGOTPASSWORD:
            localStorage.setItem('email', JSON.stringify({...action?.data}))
            
        default:
         return state
    }
}