import './App.css'
import {Outlet} from "react-router-dom";
import {Header} from "@/features/1-header/Header.tsx";

function App() {

  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
