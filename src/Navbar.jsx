import { Link } from "react-router-dom"




const Navbar = () =>{
  return(
    <nav>
      <span><Link to="/">Home</Link></span>
      <span><Link to="/">Inventory</Link></span>
      <span><Link to="/">Our Story</Link></span>
    </nav>
  )
}


export default Navbar