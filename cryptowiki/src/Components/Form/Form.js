import React,{Component} from 'react';
import '../App/App.css';
import './Form.css';


class Form extends Component {
  constructor(){
    super();
    this.getInfoHandler = this.getInfoHandler.bind(this);
  }
  async getInfoHandler(){
    var x = this.refs.coinName.value;
    this.props.infoHandler(x);
  }
 render(){ 
   return (
    <div className="form-group">
    <input type="text" className="form-control search" ref="coinName" placeholder="Enter the Crypto Currency Name" />
   <button type="submit" className="custom-btn btn btn-primary green-btn" onClick={this.getInfoHandler}>Get Info About Coin</button>
   </div>
 
  );
}
}

export default Form;