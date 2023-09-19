import { Link } from "react-router-dom"
import "./NavBar.css"
import { useEffect, useState } from "react"
import { getSeasons } from "../../services/seasonsService"

export const NavBar = () => {
  const [seasons, setSeasons] = useState([])

  useEffect(() => {
    getSeasons().then((seasonsArr) => {
      setSeasons(seasonsArr)
    })
  }, [])

  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link className="navbar__link" to="/">
          Decoration Station
        </Link>
      </li>
      {seasons.map((seasonObj) => {
        return (
          <li className="navbar__item" key={seasonObj.id}>
            <Link className="navbar__link" to={`seasons/${seasonObj.id}`}>
              {seasonObj.name}
            </Link>
          </li>
        )
      })}
      <li className="navbar__item">
        <Link className="navbar__link" to="/items/new">
          New Decoration
        </Link>
      </li>
    </ul>
  )
}
