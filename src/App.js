import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

export default class App extends Component {
  pageSize = 20;
  apiKey = process.env.REACT_APP_NEWS_API_KEY;
  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <Routes>
              <Route exact strict path="/" element={<News key="general" pageSize={this.pageSize} apiKey={this.apiKey} category={"general"} country={"in"} />} ></Route>

              <Route exact strict path="/business" element={<News key="business" pageSize={this.pageSize} apiKey={this.apiKey} category={"business"} country={"in"} />} ></Route>

              <Route exact strict path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} category={"entertainment"} country={"in"} />} ></Route>

              <Route exact strict path="/general" element={<News key="general" pageSize={this.pageSize} apiKey={this.apiKey} category={"general"} country={"in"} />} ></Route>

              <Route exact strict path="/health" element={<News key="health" pageSize={this.pageSize} apiKey={this.apiKey} category={"health"} country={"in"} />} ></Route>

              <Route exact strict path="/science" element={<News key="science" pageSize={this.pageSize} apiKey={this.apiKey} category={"science"} country={"in"} />} ></Route>

              <Route exact strict path="/sports" element={<News key="sports" pageSize={this.pageSize} apiKey={this.apiKey} category={"sports"} country={"in"} />} ></Route>

              <Route exact strict path="/technology" element={<News key="technology" pageSize={this.pageSize} apiKey={this.apiKey} category={"technology"} country={"in"} />} ></Route>
            </Routes>
          </Router>
        </div>
      </>
    )
  }
}
