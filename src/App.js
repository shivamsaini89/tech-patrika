import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

export default class App extends Component {
  pageSize = 20;
  state = { progress: 0 };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <>
        <div>
          <Router>
            <LoadingBar
              color='#f11946'
              height={3}
              progress={this.state.progress}
            />
            <Navbar />
            <Routes>
              <Route exact strict path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} apiKey={this.apiKey} category={"general"} country={"in"} />} ></Route>

              <Route exact strict path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} apiKey={this.apiKey} category={"business"} country={"in"} />} ></Route>

              <Route exact strict path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} category={"entertainment"} country={"in"} />} ></Route>

              <Route exact strict path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} apiKey={this.apiKey} category={"general"} country={"in"} />} ></Route>

              <Route exact strict path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} apiKey={this.apiKey} category={"health"} country={"in"} />} ></Route>

              <Route exact strict path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} apiKey={this.apiKey} category={"science"} country={"in"} />} ></Route>

              <Route exact strict path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} apiKey={this.apiKey} category={"sports"} country={"in"} />} ></Route>

              <Route exact strict path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} apiKey={this.apiKey} category={"technology"} country={"in"} />} ></Route>
            </Routes>
            <footer className=' navbar-secondary fixed-bottom bg-secondary text-center'>
              <h6>Created by Shivam Saini</h6>
              <em>Copyright &copy; 2023</em>
            </footer>
          </Router>
        </div>
      </>
    )
  }
}
