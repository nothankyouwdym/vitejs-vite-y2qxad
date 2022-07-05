import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"




const App = () =>{
  return(
    <section>
      <Navbar />
      <h1>Animal Shop</h1>
      <Outlet />
    </section>
  )
}


export default App