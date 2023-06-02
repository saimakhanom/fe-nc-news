import logo from "../assets/logo.png"
import "../styles/nav.css"
import CurrentUser from "./current-user"
import NavLinks from "./nav-links"

export default function Nav({user, setUser}) {
    return (
        <div className="navBarContainer">
        <div className="navBar">
            <div className="logoAndLinks">
            <img src={logo} alt="nc news" className="logo" />
            <NavLinks />
            </div>
                <CurrentUser user={user} setUser={setUser} />
        </div>
        </div>
    )
}