import React, { Component } from 'react'
import loading from "./loading.gif"
export class Loader extends Component {
  render() {
    return (
      <div className="text-center">

<img src={loading} alt="img not found "/>

      </div>
    )
  }
}

export default Loader;