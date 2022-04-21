import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
// import decode from "jwt-decode";
// import { LOGOUT } from "../../Reducers/Types";
import { useRouter } from "next/router";
import HomeComponent from "../../components/Home/Home";

export default function Home() {
  const [user, setUser] = useState();
  const router = useRouter();
  const [token, setToken] = useState(null)


  const logout = () => {
    // dispatch({ type: LOGOUT });
    router.push("/");
    setUser(null);
  };

 
  // useEffect(() => {
  //   setToken(user?.token);

  //   if (token) {
  //     const decodedToken = decode(token);

  //     if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  //   }
  //   setUser(JSON.parse(localStorage.getItem("profile")));
  // }, [router]);

  
  return (
    <>
      <Layout title={"Home | colMotors"}>
        <HomeComponent user={user}  />
      </Layout>
    </>
  );
}
