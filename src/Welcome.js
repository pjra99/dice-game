import './css/Welcome.css'
import {Link} from 'react-router-dom'

function Welcome() {

  return (
    <div className="App container-fluid">
   <div className="row welcome-screen-header">
     <div className="col-md-3"></div>
   <div className="col-md-6 welcome-screen-title"><h1>Welcome to the Dice Game</h1></div>
   <div className="col-md-3"></div>
   </div>
   <div className="row row2">
   <div className="col-md-3"></div>
   <div className="col-md-6 welcome-img-section"><img className="dice-image" src="./dice-image.png" /></div>
   <div className="col-md-3"></div>
   </div>
   <div className="row row3">
   <div className="col-md-4"></div>
   <div className="col-md-4 welcome-screen-button-section"><Link to="/addplayers"><button className="start-button"> Start Playing</button></Link></div>
   <div className="col-md-4"></div>   
   </div>
    </div>
  );
}

export default Welcome