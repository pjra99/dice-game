import ReactDOM from "react-dom"
import './css/Welcome.css'
import {BrowserRouter as Router, Link, Switch, Route, useHistory} from 'react-router-dom'
function Welcome() {

  return (
    <div className="App container-fluid">
   <div className="row welcome-screen-header">
     <div className="col-md-4"></div>
   <div className="col-md-5"><h1> Welcome to the Dice Game</h1></div>
   <div className="col-md-3"></div>
   </div>
   <div className="row row2">
   <div className="col-md-4"></div>
   <div className="col-md-6"><img className="dice-image" src="https://www.youcubed.org/wp-content/uploads/2020/03/shutterstock_1140911045.png" /></div>
   <div className="col-md-2"></div>
   </div>
   <div className="row row3">
   <div className="col-md-5"></div>
   <div className="col-md-3"><Link to="/addplayers"><button className="start-button"> Start Playing</button></Link></div>
   <div className="col-md-4"></div>   
   </div>
    </div>
  );
}

export default Welcome