import './App.css'
import {Outlet} from "react-router-dom";
import {Header} from "@/features/1-header/Header.tsx";
import {Shop} from "@/features/shop/ui/Shop.tsx";

function App() {

  return (
    <div>
      <Header/>
      <Shop/>
      <Outlet/>
    </div>
  )
}

export default App
