import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItemsBySeasonId } from "../../services/itemsService"
import { ItemsList } from "./ItemsList"

export const SeasonalItems = () => {
  const [items, setItems] = useState([])

  const { seasonId } = useParams() // { seasonId: 3 }
  // Without destructuring:
  // const paramsObj = useParams() -> paramsObj.seasonId

  useEffect(() => {
    getItemsBySeasonId(seasonId).then((itemsArr) => {
      setItems(itemsArr)
    })
  }, [seasonId])

  return <ItemsList itemsArray={items} />
}
