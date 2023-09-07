import { useEffect, useState } from "react"
import { getSeasons } from "../services/seasonsService"
import { getCategories } from "../services/categoryService"
import { postItem } from "../services/itemsService"

export const NewDecorationForm = () => {
  const [seasons, setSeasons] = useState([])
  const [categories, setCategories] = useState([])
  const [newItem, setNewItem] = useState({})

  useEffect(() => {
    getSeasons().then((seasonsArray) => {
      setSeasons(seasonsArray)
    })

    getCategories().then((catArray) => {
      setCategories(catArray)
    })
  }, []) // on initial render only

  const handleInputChange = (event) => {
    const itemCopy = { ...newItem }
    itemCopy[event.target.name] = event.target.value
    setNewItem(itemCopy)
  }

  const handleSave = (event) => {
    event.preventDefault()

    const newDecorItem = {
      name: newItem.name,
      imageUrl: newItem.imageUrl,
      seasonId: parseInt(newItem.seasonId),
      categoryId: parseInt(newItem.categoryId),
    }

    postItem(newDecorItem)
  }

  return (
    <form className="decoration-form">
      <h2 className="decoration-form-title">Add a decoration to the catalog</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="item name"
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="imgUrl">Image URL:</label>
          <input
            name="imageUrl"
            type="text"
            className="form-control"
            placeholder="https://www.example.com"
            onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
          <select name="categoryId" onChange={handleInputChange}>
            {categories.map((catObj) => {
              return (
                <option key={catObj.id} value={catObj.id}>
                  {catObj.name}
                </option>
              )
            })}
          </select>
        </div>
      </fieldset>
      <button className="btn" onClick={handleSave}>
        Add Decoration
      </button>
    </form>
  )
}
