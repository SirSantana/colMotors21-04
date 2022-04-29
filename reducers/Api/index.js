import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:3000/'|| 'https://col-motors21-04.vercel.app/' , mode:'cors' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});
//  export const getOnePost = (id)=> API.get(`api/posts/${id}`)

export const getAllPosts =()=> API.get("api/posts",)
export const createPost = (post)=> API.post("api/posts", post)
//  export const favoritePost = (id)=> API.patch(`/api/posts/${id}/favoritePost`)
// export const deletePost = (id)=> API.delete(`api/posts/${id}`)

export const signin = (form)=> API.post("api/auth/login", form,)
export const signup = (form)=> API.post("api/auth/register", form,)
export const getAllUsers =()=> API.get("api/users")
export const getUser = (id)=> API.get(`api/users/${id}`)


// export const createCotizacion=(cotizacion, id)=> API.post(`/posts/cotizacion/${id}`, cotizacion)
// export const getCotizacion=(id)=> API.get(`/posts/cotizacion/${id}`)
// export const getCotizaciones=()=> API.get('/posts/cotizacion/all')
// export const deleteCotizacion= (id)=> API.delete(`/posts/cotizacion/${id}`)