import { useEffect, useState } from "react"
import { getItems } from "../../services/itemsService"
import { useNavigate } from "react-router-dom"

export const ItemsList = () => {
  const [items, setItems] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getItems().then((itemsArray) => {
      setItems(itemsArray)
    })
  }, [])

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
