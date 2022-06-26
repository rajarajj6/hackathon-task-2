import React from 'react'
// import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <a href="#" class="logo"><img
                src="https://png.pngtree.com/png-clipart/20210417/ourlarge/pngtree-hand-drawn-global-travel-photo-cartoon-camera-png-image_3223405.jpg"
                alt="" /></a>

            <div class="bx bx-menu" id="menu-icon"></div>

            <ul class="navbar">
                <li><a href="#home">Home</a></li>
                <li><a href="#rent">Rent</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#reviews">Reviews</a></li>
            </ul>
            <div class="header-btn">
                <a href="#" class="sign-up">Sign Up </a>
                <a href="#" class="sign-in">Sign In</a>
            </div>
        </header>

    )
}
export default Header;




        //         <div>
        //             <nav className="navbar">
        //                 <div className="container-fluid">
        //                     <p className="brand-logo"> Rental</p>
        //                     <ul className="navbar-nav mx-end ">
        //                         <li className="nav-item">
        //                             <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        //                         </li>
        //                         <li className="nav-item">
        //                             <NavLink className="nav-link" aria-current="page" to="/Product">Products</NavLink>
        //                         </li>
        //                         <li className="nav-item">
        //                             <NavLink className="nav-link" aria-current="page" to="/Contact">Contact Us</NavLink>
        //                         </li>
        //                         <li className="nav-item">
        //                             <NavLink to='/Cart' className="nav-link ">Cart</NavLink>
        //                         </li>
        //                         <li class="nav-item dropdown">
        //                             <a class="nav-link dropdown-toggle justify-content-end" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                                 Profile
        //                             </a>
        //                             {/* <ul class="dropdown-menu" aria-labelledby="navbarDropdown"> */}

        //                             {/* <li><hr class="dropdown-divider" /></li>
        //                                 <li><NavLink to='/register' className="nav-link "><PersonAddIcon className='me-1' /> Register</NavLink></li>
        //                                 <li><hr class="dropdown-divider" /></li>
        //                                 <li><NavLink to='/SignIn' className="nav-link "><LoginIcon className='me-1' /> Login</NavLink></li>
        //                             </ul> */}
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </nav>
        //         </div>





