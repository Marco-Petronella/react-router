import { NavLink } from "react-router-dom"
import logo from "../assets/frieza.png"

export default function AppNav() {
    return (
        <nav className="container d-flex justify-content-between align-items-center">
            <img src={logo} className="logo" alt="prova" />
            <NavLink to="/">HomePage</NavLink>
            <NavLink to="/AboutUs">Chi siamo</NavLink>
            <NavLink to="/products">Prodotti</NavLink>
        </nav>
            
                       
            
    )
}