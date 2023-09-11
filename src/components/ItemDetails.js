import { useParams } from "react-router-dom"

export const ItemDetails = () => {
  const { itemId } = useParams()

  return <>Details for item #{itemId}</>
}
