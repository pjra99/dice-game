import './css/AddPlayers.css'
import ReactDOM from 'react-dom'
import React, {useState} from 'react'
import GameScreen from './RulesScreen.js'
import App from '../App';
import RulesScreen from './RulesScreen.js';

function AddPlayers(){

    const [firstPlayer, setFirstPlayer] = useState("");
    const [secondPlayer, setSecondPlayer] = useState("");

    function handleSubmit(){
        var p = document.getElementById('playerOneWarning');
        var q = document.getElementById('playerTwoWarning');

        p.innerHTML="";
        q.innerHTML="";

        if(firstPlayer=="" && secondPlayer==""){
            p.innerHTML="Add Player 1!"
            q.innerHTML="Add Player 2!"
            return false;
        }
        if(firstPlayer==""){
            p.innerHTML="Add Player 1!"
            return false;
        }
        if(secondPlayer==""){
            q.innerHTML="Add Player 2!"
            return false; 
        }
           

        ReactDOM.render(<RulesScreen player1={firstPlayer} player2={secondPlayer} />, document.getElementById('root'))
    }
    return(
        <div className="App container-fluid">
            <div className="row row2">
   <div className="col-md-4"></div>
   <div className="col-md-6"><img className="dice-image" src="https://www.youcubed.org/wp-content/uploads/2020/03/shutterstock_1140911045.png" /></div>
   <div className="col-md-2"></div>
   </div>
   <div className="row row3">
       <div className="col-md-2"></div>
       <div className="col-md-1"><button className="back-button" onClick={()=>ReactDOM.render(<App />, document.getElementById('root'))
}>back</button></div>
   <div className="col-md-3 add-player-section add-player1">
       <input type="text" className="input-player-name" onChange={(e)=>setFirstPlayer(e.target.value)} placeholder="Add Player 1" />
        <p id="playerOneWarning"></p>
        </div>
   <div className="col-md-3 add-player-section add-player2">
       <input type="text" className="input-player-name" onChange={(e)=>setSecondPlayer(e.target.value)} placeholder="Add Player 2" />
        <p id="playerTwoWarning"></p>
        </div>
   <div className="col-md-1 play-button-section">
       <button  onClick={handleSubmit}className="play-button">Play</button>
       </div>
   <div className="col-md-2"></div>
        </div>
        </div>
    )
}
export default AddPlayers