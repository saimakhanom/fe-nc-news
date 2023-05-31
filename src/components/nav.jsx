import logo from "../assets/logo.png"
import "../styles/nav.css"
import CurrentUser from "./current-user"
import NavLinks from "./nav-links"

export default function Nav() {
    return (
        <div className="navBar">
            <div className="logoAndLinks">
            <img src={logo} alt="nc news" className="logo" />
            <NavLinks />
            </div>
            <CurrentUser/>
        </div>
    )
}