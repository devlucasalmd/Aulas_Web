import * as React from "react"
import * as ReactDOM from "react-dom"
import { Outlet } from "react-router-dom"
import routes from "./routes"
import NavBar from "./Pages/NavBar"

function App() {

  return(
  <>
    <NavBar/>
    <Outlet/>
  </>
  )
}

export default App;
