import React,{Component} from 'react';
import './App.css';
import Form from './Form.js';
import Header from './Header.js'
import logo from './logo.jpeg';
import c1 from './b.jpg';
import c2 from './cryptocurrency.jpg';
import c3 from './images.jpeg';
import Background from './Background.js';
import Cards from './cards.js';

class App extends Component {

  constructor(){
    super();
    //state object to store necessary information needed
    this.state = {
      hideloader : false,
      coinlist : [],
      searchlabel : false,
      container:false,
      container1:true,
      title : null,
      url:null,
      countryOrigin:null,
      cgRank:null,
      date : null,
      cgScore : null,
      score:null,
      communityScore:null,
      liquidityScore:null,
      publicInterestScore:null,
      capRank : null,
      alexaRank:null,
      details : null,
      homepage:null,
      symbol:null
    }
    this.infoHandler=this.infoHandler.bind(this);
  }

// method call for displaying clientInformation
// calling specifying api depending upon id
async infoHandler(x){
  var id = x.toLowerCase();
  const coinsList = this.state.coinlist;
  var search;
  coinsList.forEach(function(value,index){
      if(value.id===id){
        search = value.id;
      }
  });
  const res = await fetch("https://api.coingecko.com/api/v3/coins/"+search);
  const data = await res.json();
  console.log(data);
  this.setState({searchlabel : true,title: data.name,symbol: data.symbol,url : data.image.large,container:true,container1:false,countryOrigin: data.country_origin,score: data.developer_score,communityScore: data.community_score,liquidityScore: data.liquidity_score,publicInterestScore: data.public_interest_score,cgRank: data.coingecko_rank,cgScore:data.coingecko_score,capRank: data.market_data.market_cap_rank, date : data.genesis_date, details: data.description.en,homepage: data.links.subreddit_url,alexaRank: data.public_interest_stats.alexa_rank});
}


//method call after render method
//calling api to load the list of coins
async componentDidMount(){
  const res = await fetch("https://api.coingecko.com/api/v3/coins/list");
  const data = await res.json();
  this.setState({ hideloader:true,coinlist : data});
}

render(){
  // storing information in variables to use it in webpage
  const style = this.state.searchlabel ? {display : 'none'}:{};
  const style1 = this.state.container ? {}:{display : 'none'};
  const style2 = this.state.container1 ? {}:{display : 'none'};
  var title = this.state.title;
  var url = this.state.url;
  var origin = this.state.countryOrigin;
  var score = this.state.score;
  var date = this.state.date;
  var communityScore = this.state.communityScore;
  var liquidityScore= this.state.liquidityScore;
  var publicInterestScore = this.state.publicInterestScore;
  var coinGeckoRank= this.state.cgRank;
  var coinGeckoScore= this.state.cgScore;
  var marketCapRank= this.state.capRank;
  var details = this.state.details;
  var homepageurl = this.state.homepage;
  var symbol = this.state.symbol;
  var alexaRank= this.state.alexaRank;
  var x="b.jpg";
    return (
    <div className="main" >
       {/* page title */}
       <Header />
      {/* setting search bar and loading meassage */}
      {this.state.hideloader ? <div className="lowerHeader"><div><Form  infoHandler={this.infoHandler}/><div className="label" style={style}><h4>Search For a Coin</h4></div></div></div> : <div className="loader lowerHeader">Loading The Coin List</div>   }
      
      {/* panel that contain search currency information */}
      <div className="container" style={style2}>
        <div className="row">
       <Background logo={logo}/>
      
      </div>
      <div className="row" style={{marginTop:'5%'}}>
       <Cards logo={logo} c3={c3} c1={c1} c2={c2}></Cards>
       </div>

      </div>
      
      <div className="container" style={style1} >
     <div className="panelTitle"><a href={homepageurl}>{title} - {symbol}</a></div>
    
      {/* first division of panel */}
      
      <div className="coinImage img-fluid rounded mx-auto d-block">
      <img src ={url} style={{width : '100%'}} alt={title}/>
      </div>

          <div className="coinDetail">
          <div className="row">
            <div className="card card1 col-sm-2">
            <div className="deatailabel">Country of Origin -</div>
            <div className="info">{origin}</div>
            </div>
            <div className="card card1 col-sm-2">
            <div className="deatailabel">Date Of Apperance -</div>
            <div className="info">{date}</div>
            </div>
            <div className="card card1 col-sm-2">
            <div className="deatailabel">Market Cap Rank -</div>
            <div className="info">{marketCapRank}</div>
            </div>
            <div className="card card1 col-sm-2">
            <div className="deatailabel">Public Interest Score -</div>
            <div className="info">{publicInterestScore}</div>
            </div>
            <div className="card card1 col-sm-2">
            <div className="deatailabel">Alexa Rank -</div>
            <div className="info">{alexaRank}</div>
            </div>
         </div>
         <div className="row">
                   
            <div className="card card1 col-sm-2">
            <div className="deatailabel">Coin Gecko -</div>
            <div className="info">Rank - {coinGeckoRank}</div>
            <div className="info">Score - {coinGeckoScore}</div>
            </div>
            <div className="card card1 col-sm-2">
            <div className="deatailabel">Developer Score -</div>
            <div className="info">{score}</div>
            </div>
            <div className="card card1 col-sm-2">
            <div className="deatailabel">Community Score -</div>
            <div className="info">{communityScore}</div>
            </div>
            <div className="card card1 col-sm-2">
            <div className="deatailabel">Liquidity Score -</div>
            <div className="info">{liquidityScore}</div>
            </div>
    
          
             </div>
     
         {/* second division of panel */}
        <div className="description">
       
        <div>{details}
        </div>
        </div>
  
    </div>
    </div>
  
     </div>
   );
 }
 }

export default App;
