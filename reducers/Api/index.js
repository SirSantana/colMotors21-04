import axios from 'axios'
//OFRECER CONTRAENTREGA!!
const API = axios.create({ baseURL: 
  'https://col-motors21-04.vercel.app/' ,headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://col-motors21-04.vercel.app'
  }});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});
 export const getOnePost = (id)=> API.get(`api/posts/${id}`)

export const getAllPosts =()=> API.get("api/posts")
export const createComment=(body, id)=> API.post(`api/comentario/${id}`, body)
export const createPost = (post)=> API.post("api/posts", post)
//  export const favoritePost = (id)=> API.patch(`/api/posts/${id}/favoritePost`)
// export const deletePost = (id)=> API.delete(`api/posts/${id}`)

export const signin = (form)=> API.post("api/auth/login", form,)
export const signup = (form)=> API.post("api/auth/register", form,)
export const getAllUsers =()=> API.get("api/users")
export const getUser = (id)=> API.get(`api/users/${id}`)
export const forgotPassword = (form) => API.post(`api/auth/forgotPassword`, form)
export const updatePassword = (form, email)=> API.patch('api/auth/updatePassword', {form, email})
export const calificacionUser =(id, form, cotizacionId)=> API.patch(`api/auth/calificacionuser/${id}`, {form, cotizacionId})

export const getCotizaciones=()=> API.get('api/cotizaciones')
export const createCotizacion=(cotizacion)=> API.post('api/cotizaciones', cotizacion)
export const getCotizacion=(id)=> API.get(`api/cotizaciones/${id}`)
// export const deleteCotizacion= (id)=> API.delete(`/posts/cotizacion/${id}`)

export const createVehiculo=(form)=> API.post(`api/vehiculo/`, form)
export const editVehiculo=(form, id)=> API.post(`api/vehiculo/${id}`, form)

export const addGasolina=(form, id)=> API.post(`api/gasolina/${id}`, form)
export const editGasolina=(form,id)=> API.patch(`api/gasolina/${id}`,form)
export const getGasolina=(id)=> API.get('api/gasolina', id)
export const getGasolinas =()=> API.get('api/gasolinas')
export const deleteGasolina =(id)=> API.delete(`api/gasolina/${id}`)