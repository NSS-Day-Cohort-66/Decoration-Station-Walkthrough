import { useEffect, useState } from "react"
import { getItems } from "../../services/itemsService"
import { ItemsList } from "./ItemsList"

export const AllItems = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    getItems().then((itemsArray) => {
      setItems(itemsArray)
    })
  }, [])

  return <ItemsList itemsArray={items} />
}
