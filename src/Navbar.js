import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand disabled" to="/general">News Monkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/technology" tabIndex="-1" >Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/entertainment" tabIndex="-1" >Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/health" tabIndex="-1" >Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/sports" tabIndex="-1" >Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/business" tabIndex="-1" >Business</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    )
  }
}
