import { NavLink } from "react-router-dom"

export default function AppNav() {
    return (
        <nav className="container d-flex justify-content-between">
            <NavLink to="/">HomePage</NavLink>
            <NavLink to="/AboutUs">Chi siamo</NavLink>
            <NavLink to="/products">Prodotti</NavLink>
        </nav>
    )
}