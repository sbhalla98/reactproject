import React from 'react';

import './background.css';

const Background = function(props){
  return (
      <div>
    
           <div className="col-lg-12">
         
          <img src={props.logo}  className="img-fluid" alt="not existed"/>
       
            </div>
            <div className="h1" > Get Coin Gecko</div>
      </div>
  
  );
}

export default Background;