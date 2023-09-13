import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItemById } from "../../services/itemsService"
import { getSeasons } from "../../services/seasonsService"
import { getCategories } from "../../services/categoryService"

export const EditDecoration = () => {
  const [item, setItem] = useState({})
  const [seasons, setSeasons] = useState([])
  const [categories, setCategories] = useState([])

  const { itemId } = useParams()

  useEffect(() => {
    getSeasons().then((seasonsArr) => {
      setSeasons(seasonsArr)
    })

    getCategories().then((catArr) => {
      setCategories(catArr)
    })
  }, [])

  useEffect(() => {
    getItemById(itemId).then((itemObj) => {
      setItem(itemObj)
    })
  }, [itemId])

  return (
    <form className="decoration-form">
      <h2 className="decoration-form-title">Edit decoration</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            value={item.name}
            type="text"
            className="form-control"
            placeholder="item name"
            onChange={(event) => {
              const itemCopy = { ...item }
              itemCopy.name = event.target.value
              setItem(itemCopy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="imgUrl">Image URL:</label>
          <input
            name="imageUrl"
            value={item.imageUrl}
            type="text"
            className="form-control"
            placeholder="https://www.example.com"
            onChange={(event) => {
              const itemCopy = { ...item }
              itemCopy.imageUrl = event.target.value
              setItem(itemCopy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Season:</div>
          {seasons.map((seasonObj) => {
            return (
              <div key={seasonObj.id} className="radio">
                <label>
                  <input
                    type="radio"
                    name="seasonId"
                    value={seasonObj.id}
                    checked={seasonObj.id === item.seasonId}
                  />
                  {seasonObj.name}
                </label>
              </div>
            )
          })}
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Category:</div>
          <select name="categoryId" value={item.categoryId}>
            <option value={0}>Please select a category</option>
            {categories.map((categoryObj) => {
              return (
                <option key={categoryObj.id} value={categoryObj.id}>
                  {categoryObj.name}
                </option>
              )
            })}
          </select>
        </div>
      </fieldset>
      <button className="btn">Add Decoration</button>
    </form>
  )
}
