import React, { Component } from 'react'


export  class NewsItem extends Component {
  
   
  render() {
    let{url,title,disc,newsurl}=this.props;

    return (
      <>
     
      <div className= "card"  >
      <img src={url} className="card-img-top" alt="img not found" style={{height:150}}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{disc}</p>
        <a href={newsurl}  className="btn btn-dark btn-sm">Read More</a>
      </div>
    </div>
    
    </>
    )
  };
}

export default NewsItem;
