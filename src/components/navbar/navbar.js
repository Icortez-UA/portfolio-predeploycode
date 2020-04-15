import React from "react";
import { Link } from "react-router-dom";

 


function navbar(props){
  



   return     <div className="container-fluid bg-light">
   <nav className="navbar navbar-expand-sm navbar-light ">
      <a className="navbar-brand flex-grow-1 flex-xl-shrink-1 text-center" href="#">Isaac Cortez</a>
      <div className= "container p-1 d-flex justify-content-center ">
          <ul className= "navbar-nav ml-sm-auto flex-row">
              <li className= "nav-item p-1">
              <Link className= "nav-link p-1 pr-2 rightborder" to='/Home' >Home</Link>
              </li>
              <li className = "nav-item p-1 ml-2">
                  <Link className= "nav-link p-1 pr-2 rightborder" to='/portfolio' >Portforlio</Link>
              </li>
              <li className= "nav-item p-1 ml-2">
                  <Link className= "nav-link p-1" to='/contact'>Contact</Link>
              </li>
          </ul>
      </div>
  </nav>

</div> 
}
export default navbar;
