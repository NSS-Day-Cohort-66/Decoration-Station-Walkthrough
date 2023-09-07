import { useEffect, useState } from "react"
import { getSeasons } from "../services/seasonsService"
import { getCategories } from "../services/categoryService"

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

  return (
    <form className="decoration-form">
      <h2 className="decoration-form-title">Add a decoration to the catalog</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            required
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
            required
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
    </form>
  )
}
