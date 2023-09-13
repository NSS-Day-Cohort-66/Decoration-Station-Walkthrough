import { useParams, useNavigate } from "react-router-dom"
import { getItemById } from "../../services/itemsService"
import { useEffect, useState } from "react"

export const ItemDetails = () => {
  const [item, setItem] = useState({})

  const { itemId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getItemById(itemId).then((itemObj) => {
      setItem(itemObj)
    })
  }, [itemId])

  return (
    <div className="item-detail-container">
      <h3 className="item-detail-name">Item details for item: {item.name}</h3>
      <img src={item.imageUrl} alt={item.name} className="item-img" />
      <div className="item-details">Category: {item.category?.name}</div>
      <div className="item-details">Season: {item.season?.name}</div>
      <button
        onClick={() => {
          navigate(`/items/${item.id}/edit`)
        }}
      >
        Edit
      </button>
    </div>
  )
}
