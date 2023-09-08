import { Outlet, Route, Routes } from "react-router-dom"
import "./App.css"
import { ItemsList } from "./components/ItemsList"
import { NewDecorationForm } from "./components/NewDecorationForm"

export const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<ItemsList />} />
        <Route path="items">
          <Route path="new" element={<NewDecorationForm />} />
        </Route>
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
