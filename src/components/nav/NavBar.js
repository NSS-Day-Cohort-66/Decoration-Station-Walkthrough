import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link className="navbar__link" to="/">
          Decoration Station
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/items/new">
          New Decoration
        </Link>
      </li>
    </ul>
  )
}
