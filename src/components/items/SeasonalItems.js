import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getItemsBySeasonId } from "../../services/itemsService"

export const SeasonalItems = () => {
  const [items, setItems] = useState([])

  const { seasonId } = useParams() // { seasonId: 3 }
  // Without destructuring:
  // const paramsObj = useParams() -> paramsObj.seasonId
  const navigate = useNavigate()

  useEffect(() => {
    getItemsBySeasonId(seasonId).then((itemsArr) => {
      setItems(itemsArr)
    })
  }, [seasonId])

  return (
    <div className="item-container">
      {items.map((item) => {
        return (
          <div key={item.id} className="item-card">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="item-img"
              onClick={() => {
                navigate(`/items/${item.id}`)
              }}
            ></img>
            <div className="item-name">{item.name}</div>
          </div>
        )
      })}
    </div>
  )
}
