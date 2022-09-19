
import './App.css';
import {Route,Routes,BrowserRouter as Router } from "react-router-dom"

import React, { Component } from 'react'
import Navbar from './Navbar';
import News  from './News';
import LoadingBar from 'react-top-loading-bar';
import Headingimg from './Headingimg';

export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
this.setState({
  progress:progress
})
  }
  constructor(){
    super();
    this.state={
      api:"069d527c7a8e400eb5106634f665b5e6"
    }
  }
 
  render() {
    return (
      <>
      
      
      <Router>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
  
      <Navbar/>
      
      <Headingimg/>
      <Routes>
        <Route key="home" exact path="/" element={ <News changetime={this.setProgress} pageSize={8} country={"In"} category={"general"} api={this.api}/> } />
        </Routes>
        <Routes>
        <Route key="general" exact path="/general" element={ <News changetime={this.setProgress} pageSize={8} country={"In"} category={"general"} api={this.api}/> } />
        </Routes>
        <Routes>
         <Route key="sports"exact path="/sports" element={ <News changetime={this.setProgress} pageSize={8} country={"In"} category={"sports"} api={this.api}/> } /></Routes>
         <Routes>
        <Route key="science" exact path="/science" element={ <News changetime={this.setProgress} pageSize={8} country={"In"} category={"science"} api={this.api}/> } /></Routes>
        <Routes>
        <Route key="entertainment" exact path="/entertainment" element={ <News changetime={this.setProgress} pageSize={8} country={"In"} category={"entertainment"} api={this.api}/> } /></Routes>
        <Routes><Route key="health" exact path="/health" element={ <News changetime={this.setProgress} pageSize={8} country={"In"} category={"health"} api={this.api}/> }  /></Routes>
        <Routes><Route key="buisness" exact path="/business" element={ <News changetime={this.setProgress} pageSize={8} country={"In"} category={"business"} api={this.api}/> } /></Routes>
        <Routes> <Route key="technology" exact path="/technology" element={ <News changetime={this.setProgress} pageSize={8} country={"In"} category={"technology"} api={this.api}/> } /> 
        </Routes>
      
      </Router>
</>
    )
  }
}


