import { Outlet, Route, Routes } from "react-router-dom"
import "./App.css"
import { ItemsList } from "./components/ItemsList"
import { NewDecorationForm } from "./components/NewDecorationForm"
import { NavBar } from "./components/nav/NavBar"
import { ItemDetails } from "./components/ItemDetails"

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
          <Route path=":otherThing/thing" element={<>Does this work?</>} />
          {/* This Route will render when the url is localhost:3000/items/[some id] */}
          <Route path="new" element={<NewDecorationForm />} />
        </Route>
      </Route>
    </Routes>
  )
}
