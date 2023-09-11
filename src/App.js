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
          <Route path=":itemId" element={<ItemDetails />} />{" "}
          {/* This Route will render when the url is localhost:3000/items/[some id] */}
          <Route
            path="new"
            element={
              <>
                <NewDecorationForm />
                <ItemsList />
              </>
            }
          />
        </Route>

        {/* Fun routes for learning */}
        <Route
          path="hello"
          element={
            <>
              <h1>Hello </h1>
              <Outlet />
            </>
          }
        >
          <Route path="kevin" element={<h2>Kevin!</h2>} />
          <Route path="sylvia" element={<h2>Sylvia!</h2>} />
          <Route path="helen" element={<h2>Helen!</h2>} />
        </Route>
        <Route path="bye" element={<h2>Bye Bye</h2>} />
      </Route>
    </Routes>
  )
}
