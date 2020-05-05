import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "./App.css"
import Home from "./pages/home"
import Form from "./pages/input"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/home"]}>
            <Home />

        </Route>
        <Route exact path="/form">
            <Form />
        </Route>
      </Switch>
    </Router>
  )
}

export default App