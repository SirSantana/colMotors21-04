import * as api from '../Api/index'
import { AUTH, GETUSER, GETUSERS } from '../type'

export const signin = (form, router)=> async(dispatch)=>{
    try {
        const {data} = await api.signin(form)
        dispatch({type: AUTH, data})
        router.push("/home")

    } catch (error) {
        console.log(error);
    }
}
export const signup = (form, router)=> async(dispatch)=>{
    try {
        
        const {data} = await api.signup(form)
        dispatch({type: AUTH, data})
        router.push("/home")

    } catch (error) {
        console.log(error);
    }
}

export const getUsers = ()=> async(dispatch)=>{
    try {
        const {data} = await api.getAllUsers()
        console.log(data);
        dispatch({type: GETUSERS, payload: data})
    } catch (error) {
       console.log(error); 
    }
}
export const getUser = (userId)=> async(dispatch)=>{
    try {
        const {data} = await api.getUser(userId)
        console.log(userId);
        dispatch({type: GETUSER, payload: data})
    } catch (error) {
        console.log(error);
    }
}