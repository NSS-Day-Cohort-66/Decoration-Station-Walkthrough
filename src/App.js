import { Outlet, Route, Routes } from "react-router-dom"
import "./App.css"
import { ItemsList } from "./components/items/ItemsList"
import { NewDecorationForm } from "./components/forms/NewDecorationForm"
import { NavBar } from "./components/nav/NavBar"
import { ItemDetails } from "./components/items/ItemDetails"
import { EditDecoration } from "./components/forms/EditDecoration"
import { SeasonalItems } from "./components/items/SeasonalItems"

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<ItemsList />} />
        <Route path="items">
          <Route path=":itemId" element={<ItemDetails />} />
          <Route path=":itemId/edit" element={<EditDecoration />} />
          <Route path="new" element={<NewDecorationForm />} />
        </Route>
        <Route path="seasons">
          <Route path=":seasonId" element={<SeasonalItems />} />
        </Route>
      </Route>
    </Routes>
  )
}
