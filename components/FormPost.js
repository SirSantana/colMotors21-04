import { useState } from "react"
import {useRouter} from 'next/router'

const initialForm={
    marca:"",
    repuesto:""
}

export default function FormPost(){
    const [form,setForm] = useState(initialForm)
    const [message, setMessage] = useState('')

    const router = useRouter()

    const handleChange=(e)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setForm(initialForm)
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
              router.push("/posts")
            }
          } catch (error) {
            console.log(error);
          }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input required={true} type="text" placeholder="Marca de auto" onChange={handleChange} name="marca" value={form.marca} />
            <input required={true} type="text" placeholder="Repuestos" onChange={handleChange}  name="repuesto" value={form.repuesto}/>
            <input type='submit' value='Cotiza ya!'/>
        </form>
        </>
    )
}