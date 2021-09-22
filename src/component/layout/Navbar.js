import React from 'react';
import {Link} from 'react-router-dom'



const Navbar = () =>{
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/contact">Contact</Link>
                </li>
                
            </ul>
            </div>
            
            <Link class="btn btn-light" to="/adduser">Add User</Link>
               
        </div>
        </nav>

        </div>
    )
}
export default Navbar;