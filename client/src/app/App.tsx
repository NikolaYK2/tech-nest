import './App.css'
import {Outlet} from "react-router-dom";
import {Header} from "@/features/1-header/Header.tsx";
import {observer} from "mobx-react-lite";
import {useAuth} from "@/features/auth/lib/useAuth.ts";
import {useEffect, useState} from "react";
import {authApi} from "@/features/auth/api/authApi.ts";

function App() {
  const {user} = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authApi.check()
      .then(_ => {
        user.setIsAuth(true);
        user.setUser(true);
      })
      .finally(() => setLoading(false))
  }, []);

  if (loading) {
    return <div style={{fontSize: '50px'}}>LOADING...</div>
  }

  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default observer(App);
