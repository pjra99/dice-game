import './App.css'
import AddPlayers from './Screens/AddPlayers.js'
import ReactDOM from "react-dom"
function App() {
  return (
    <div className="App container-fluid">
   <div className="row row1">
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
   <div className="col-md-4"><button onClick={()=> ReactDOM.render(<AddPlayers />, document.getElementById('root'))}className="start-button"><h2>Start Playing</h2></button></div>
   <div className="col-md-3"></div>   
   </div>
    </div>
  );
}

export default App;
