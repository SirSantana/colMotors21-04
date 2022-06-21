import { useDispatch } from 'react-redux'
import ForgotPasswordComponent from '../../components/Auth/forgotPassword'
import Layout from '../../components/Layout/Layout'
import { forgotPassword } from '../../reducers/Actions/authActions'



export default function ForgotPassword(){
    const dispatch = useDispatch()


    const sendMessage=(form, setError, setMessage)=>{
        dispatch(forgotPassword({...form, setError, setMessage}))
    }
   
    
    return(
        <Layout title={'Olvidaste Tu Contraseña | colMotors'}>
            <ForgotPasswordComponent sendMessage={sendMessage}/>
        </Layout>
    )
}