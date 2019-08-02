import React from 'react';

// import './background.css';

const Cards = function(props){
  return (
      <div>
          <div className="row">
          <div className="card col-lg-3"  style={{marginLeft:'6%'}}>
        <img src={props.c3} className="card-img-top" style={{height:'150px'}} alt="..."/>
        <div className="card-body">
         <p className="card-text">A cryptocurrency (or crypto currency) is a digital asset designed to work as a medium of exchange that uses strong cryptography to secure financial transactions, control the creation of additional units, and verify the transfer of assets</p>
        </div>
        </div>
        <div className="card col-lg-3" style={{marginLeft:'6%'}}>
        <img src={props.c1} className="card-img-top"  style={{height:'150px'}} alt="..."/>
        <div className="card-body">
         <p className="card-text"></p>
        </div>
        </div>
        <div className="card col-lg-3"  style={{marginLeft:'6%'}}>
        <img src={props.c2} className="card-img-top" style={{height:'150px'}}  alt="..."/>
        <div className="card-body">
         <p className="card-text">Here in our website you can get information about any cryptocurrency gets to familiar with it. Hope You will have greate experince. Serach any cryptocurrency in search bar and press button to get information :)</p>
        </div>
        </div>
        </div>
      </div>
  
  );
}

export default Cards;