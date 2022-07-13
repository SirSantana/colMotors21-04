import * as api from '../Api/index'
import { AUTH, CALIFICACIONUSER, FORGOTPASSWORD, GETUSER, GETUSERS, UPDATEPASSWORD } from '../type'

export const signin = (form, router, setMessage, setMessageError, setMessageLoad)=> async(dispatch)=>{
    
    try {
        setMessageLoad('Espera un momento...')
        const {data} = await api.signin(form)
        router.push(`/home`)
        dispatch({type: AUTH, data})
        
        setMessage('Ingresando Correctamente...')

    } catch (error) {
        console.log(error.response);
        setMessageLoad(null)
        setMessageError(error.response.data)
    }
}
export const signup = (form, router,setMessage, setMessageError, setMessageLoad)=> async(dispatch)=>{
    try {
        setMessageLoad('Espera un momento...')
        const {data} = await api.signup(form)
        dispatch({type: AUTH, data})
        setMessage('Registro Correcto')
        router.push("/home")

    } catch (error) {
        console.log(error);
        setMessageLoad(null)
        setMessageError(error.response.data)

    }
}

export const forgotPassword=(form)=> async(dispatch)=>{
    try {
        const {data} = await api.forgotPassword(form)
        dispatch({type:FORGOTPASSWORD, data})

    } catch (error) {
        console.log(error);

    }
}
export const calificacionUser=(id, form, cotizacionId)=> async(dispatch)=>{
    try {
        const {data} = await api.calificacionUser(id, form, cotizacionId)
        console.log(data);
        dispatch({type:CALIFICACIONUSER})

    } catch (error) {
        console.log(error);
    }
}
export const updatePassword =(form, email, setMessage, setError, router)=> async(dispatch)=>{
    try {
        setMessage('Actualizando Contraseña...')
        const {data} = await api.updatePassword(form, email)
            setMessage('Contraseña actualizada')
        dispatch({type:UPDATEPASSWORD, payload:data})
        router.push('/auth')
        
    } catch (error) {
        setError('Datos erroneos')
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
        dispatch({type: GETUSER, payload: data})
    } catch (error) {
        console.log(error);
    }
}

