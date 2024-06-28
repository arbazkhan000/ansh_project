import {Link,useLocation } from "react-router-dom";
import '../styles.css'
import { useContext } from "react";
import authContext from "../context/authContext";
export default function Navbar() {
    const location =useLocation();
    const context=useContext(authContext);
    const {isLoggedIn}=context;
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top row">
  <div className="container-fluid">
    <Link className="navbar-brand ms-5 col-3" to="/">Navbar</Link>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 position-relative">
        <li className="nav-item me-2">
          <Link className={location.pathname==='/'? "nav-link active":"nav-link"} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item me-2">
          <Link className={location.pathname==='/about'? "nav-link active":"nav-link"} to="/about">About</Link>
        </li>
       
        {isLoggedIn ? 
        <li className="nav-item me-2">
          <Link className={location.pathname==='/logout'? "nav-link active":"nav-link"} to="/logout">Logout</Link>
        </li> :
        <>
        <li className="nav-item me-2">
          <Link className={location.pathname==='/login'? "nav-link active":"nav-link"} to="/login">Login</Link>
        </li>

        <li className="nav-item me-2">
          <Link className={location.pathname==='/register'? "nav-link active":"nav-link"} to="/register">Register</Link>
        </li>
        </>
}
        <li className="nav-item me-2">
          <Link className={location.pathname==='/contact'? "nav-link active":"nav-link"} to="/contact">Contact Us</Link>
        </li>
        

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
}
