import { Outlet, Route, Routes } from "react-router-dom"
import "./App.css"
import { ItemsList } from "./components/items/ItemsList"
import { NewDecorationForm } from "./components/forms/NewDecorationForm"
import { NavBar } from "./components/nav/NavBar"
import { ItemDetails } from "./components/items/ItemDetails"
import { EditDecoration } from "./components/forms/EditDecoration"
import { SeasonalItems } from "./components/items/SeasonalItems"
import { AllItems } from "./components/items/AllItems"

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
        <Route index element={<AllItems />} />
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
