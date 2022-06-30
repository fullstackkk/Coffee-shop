import { NavLink } from 'react-router-dom';

import '../styles/navbar.scss'


// TODO  добавить певдоэлемент зерен
const DarkNavbar=()=>{
    return(
        <div className="navbar navbar-footer">
            <NavLink to={'/Coffee-shop/'} className="navbar-link navbar-link-black">Coffee house</NavLink>
            <NavLink to={'/Coffee-shop/Coffee'} className="navbar-link navbar-link-black">Our coffee</NavLink>
            <NavLink to={'/Coffee-shop/Beans'} className="navbar-link navbar-link-black">For your pleasure</NavLink>
        </div> 
    )
}

export default DarkNavbar;