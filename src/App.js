import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <Router>
          <Navbar />
          <Routes>
            <Route exact strict path="/" element={<News key="general" pageSize={20} category={"general"} country={"in"} />} ></Route>

            <Route exact strict path="/business" element={<News key="business" pageSize={20} category={"business"} country={"in"} />} ></Route>

            <Route exact strict path="/entertainment" element={<News key="entertainment" pageSize={20} category={"entertainment"} country={"in"} />} ></Route>

            <Route exact strict path="/general" element={<News key="general" pageSize={20} category={"general"} country={"in"} />} ></Route>

            <Route exact strict path="/health" element={<News key="health" pageSize={20} category={"health"} country={"in"} />} ></Route>

            <Route exact strict path="/science" element={<News key="science" pageSize={20} category={"science"} country={"in"} />} ></Route>

            <Route exact strict path="/sports" element={<News key="sports" pageSize={20} category={"sports"} country={"in"} />} ></Route>
             
            <Route exact strict path="/technology" element={<News key="technology" pageSize={20} category={"technology"} country={"in"} />} ></Route>
          </Routes>
          </Router>
        </div>
      </>
    )
  }
}
