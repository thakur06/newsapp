import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  spinning=false;

  articles=[];
  constructor(){
    super();
    this.state={
    articles:[],
    totalResults:0,
    uniqueUrl:"",
    page:1,
    spinning:true,
    link:""
    }
//console.log(this.spinning+"ctr")
    
  }

  
async componentDidMount(){
  this.spinning=true;
  // this.setState({
  //   this.spinning=true
  // })
 // console.log(this.spinning)
  const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8d074cfb37241679e197af5f37ad452&page=${this.state.page}&pagesize=${this.props.pageSize}`;
let data=await fetch(url);
this.props.changetime(10);
let parseData=await data.json();
this.props.changetime(40);
this.setState({
  articles:parseData.articles,
totalResults:parseData.totalResults,
uniqueUrl:parseData.url+this.state.page+Math.random(),
link:parseData.urlToImage
})
this.props.changetime(100);
this.spinning=false;
//console.log(this.uniqueUrl)
}

fetchMoreData = async() => {
  // this.setState({
  //  // spinning:true
  // })
  this.spinning=true;
  this.setState({page:this.state.page+1})
  
  const xxx=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8d074cfb37241679e197af5f37ad452&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
  this.setState({
    //spinning:false
  })
this.setState({loading:true})
let data= await fetch(xxx);
let main= await data.json();
this.setState({
articles:this.state.articles.concat(main.articles),
totalResults:main.totalResults,
//spinning:false
uniqueUrl:main.url+this.state.page+Math.random(),
link:main.urlToImage

})
this.spinning=false;
//console.log(this.spinning);
//console.log(this.state.page);
//console.log(this.uniqueUrl)
}
 checker(){
if (this.link==="" ||this.link===" " ||this.link===null || this.link.status===403 ){
  return "https://th.bing.com/th/id/OIP.n0ZbNHzIQiVMhtawX7SrkwHaEo?w=285&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7";

}
else{
  return this.link;
}
}
  render() {
    
    return (
      <div className="container">
      
              
            <h1 className='text-center'>Top Headlines</h1>
            {/* {console.log(this.spinning+"render")} */}
            <>
             <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length!==this.state.totalResults}
                loader={this.spinning &&<Loader/>} >
               <div className='container'>
              <div className='row '>

                  {this.state.articles.map((element,index)=>{
                    return(
                      /// instead of index alternate --> Math.floor(Math.random() * Math.floor(Math.random() * Date.now())) for unique key genration 
                    <div className='col-md-3 my-2' key={Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}  >
                      <NewsItem url={element.urlToImage?element.urlToImage:"https://th.bing.com/th/id/OIP.n0ZbNHzIQiVMhtawX7SrkwHaEo?w=285&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"} disc={element.description?element.description.slice(0,30):" "} title={element.title?element.title.slice(0,50):" "} newsurl={element.url}/>
                </div>)
                  })
        }
       
      </div>
        </div></InfiniteScroll></>
        
               
                
                 
      </div>
      
      
          
          )}
        
  
  
}
