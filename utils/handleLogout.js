import { LOGOUT } from "../reducers/type";

export const handleLogout=(setUser, router, dispatch)=>{
    dispatch({ type: LOGOUT });
    setUser(null)
    router.push("/")
  }