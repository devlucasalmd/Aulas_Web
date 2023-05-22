import * as React from "react"
import * as ReactDOM from "react-dom"
import Main from "./Pages/Main"
import { Outlet } from "react-router-dom"

function App() {

  return(
  <>
    <Outlet/>
  </>
  )
}

export default App;
