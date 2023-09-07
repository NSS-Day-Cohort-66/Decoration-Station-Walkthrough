import { useEffect, useState } from "react"
import { getItems } from "./services/itemsService"
import "./App.css"
import { getSeasons } from "./services/seasonsService"
import { ItemsList } from "./components/ItemsList"
import { NewDecorationForm } from "./components/NewDecorationForm"

// Initial render
// state is defined with initial values & js is rendered
// useEffects are run

export const App = () => {
  const [items, setItems] = useState([]) // [ [], functionToSetValue ]
  const [filteredItems, setFilteredItems] = useState([])
  const [seasons, setSeasons] = useState([])
  const [seasonChoice, setSeasonChoice] = useState(0)

  useEffect(() => {
    getItems().then((itemsArray) => {
      setItems(itemsArray)
    })

    getSeasons().then((seasonsArray) => {
      setSeasons(seasonsArray)
    })

    // console.log("I only happen on the initial render!")
  }, []) // empty dependency array says, "ONLY run on the initial render of the component"

  useEffect(() => {
    console.log(items)
    if (seasonChoice !== 0) {
      const seasonItems = items.filter((item) => item.seasonId === seasonChoice)
      setFilteredItems(seasonItems)
    } else {
      setFilteredItems(items)
    }
  }, [seasonChoice, items]) // This runs on the initial render AND whenever the value of seasonChoice changes

  // console.log("I happen on every render!")

  return (
    <>
      <div id="filter-bar">
        <select
          className="filter-box"
          id="season-select"
          onChange={(event) => {
            setSeasonChoice(parseInt(event.target.value))
          }}
        >
          <option value={0}>All Seasons</option>
          {seasons.map((season) => {
            return (
              <option value={season.id} key={season.id}>
                {season.name}
              </option>
            )
          })}
        </select>
      </div>
      <NewDecorationForm />
      <ItemsList
        items={filteredItems}
        seasons={seasons}
        seasonChoice={seasonChoice}
      />
    </>
  )
}

// initial render:
//  items: []

// items has been set!
// rerender the component!
//  items: [{...}]
