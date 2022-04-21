import { useState } from "react"
import {useRouter} from 'next/router'

const initialForm={
    email:"",
    password:""
}

export default function Form(){
    const [form,setForm] = useState(initialForm)
    const [message, setMessage] = useState('')

    const router = useRouter()


    const handleChange=(e)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        createPost(form)
    }
    async function createPost(form){
        try {
            const res = await fetch('/api/posts', {
              method: "POST",
              headers: {"Content-type": 'application/json'},
              body: JSON.stringify(form),
            });
            const data = await res.json();
            if(!data){
              setMessage('Cargando')
            }      
            if (!data.success) {
              setMessage(data?.error);
            } else {
              router.push('/posts');
            }
          } catch (error) {
            console.log(error);
          }
    }

    return(
        <>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Coloca tu email" onChange={handleChange} value={form.email} name="email"/>
            <input type="password" placeholder="Coloca tu password" onChange={handleChange} value={form.password} name="password"/>
            <input type='submit' value='Iniciar Sesion'/>
        </form>
        </>
    )
}