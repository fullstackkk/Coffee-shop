import { NavLink } from 'react-router-dom';

import '../styles/navbar.scss';


// TODO  добавить певдоэлемент зерен
const Navbar=()=>{
    return(
        <div className="navbar navbar-header">
            <NavLink to={'/Coffee-shop/'} className="navbar-link">Coffee house</NavLink>
            <NavLink to={'/Coffee-shop/Coffee'} className="navbar-link">Our coffee</NavLink>
            <NavLink to={'/Coffee-shop/Beans'} className="navbar-link">For your pleasure</NavLink>
        </div> 
    )
}

export default Navbar;