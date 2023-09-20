import { useNavigate } from "react-router-dom"

export const ItemsList = ({ itemsArray }) => {
  const navigate = useNavigate()

  return (
    <div className="item-container">
      {itemsArray.map((item) => {
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
