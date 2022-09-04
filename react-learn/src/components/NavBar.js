import { useEffect } from "react"
import styles from "./style.module.css"
import React from "react"
import {Link} from 'react-router-dom';
function NavBar(){

  
  console.log("NavBar rendered")

    return(
        <div >
           <div className={"navbar navbar-expand-lg bg-light "}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" >Home</Link>
                    <Link className="navbar-brand" to="/">Order Now</Link>
                    <Link className="navbar-brand" to="/about">about us</Link>
                </div>
           </div>
        </div>
    )
}
export default React.memo(NavBar)


// <nav className={"navbar navbar-expand-lg bg-light "}>
// <div className="container-fluid">
//   <a className="navbar-brand" href="#">Navbar</a>
//   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//       <li className="nav-item">
//         <a className="nav-link active" aria-current="page" href="#">Home</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">About us</a>
//       </li>
//     </ul>
//   </div>
// </div>
// </nav> 