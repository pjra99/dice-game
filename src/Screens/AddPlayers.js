import './css/AddPlayers.css'
import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

function AddPlayers(){

 const history = useHistory();

    const [firstPlayer, setFirstPlayer] = useState("");
    const [secondPlayer, setSecondPlayer] = useState("");

    const [warning1, setWarning1] = useState("");
    const [warning2, setWarning2] = useState("");

    function handleSubmit(){
 
        setWarning1("")
        setWarning2("")

        if(firstPlayer=="" && secondPlayer==""){
           setWarning1("Add Player 1!")
           setWarning2("Add Player 2!")
            return false;
        }
        if(firstPlayer==""){
            setWarning1("Add Player 1!")
            return false;
        }
        if(secondPlayer==""){
            setWarning2("Add Player 2!")
            return false; 
        }  
        history.push({ pathname:'/rulesscreen',
            state: {
                player1: firstPlayer, player2: secondPlayer
            }
        })
    }
    return(
        <div className="container-fluid addplayers-screen">
         <div className="row add-players-header">
     <div className="col-md-4"><Link to="/"><button className="back-button">Back</button></Link></div>
   <div className="col-md-5"><h1> Welcome to the Dice Game</h1></div>
   <div className="col-md-3"></div>
   </div>
            <div className="row row2">
   <div className="col-md-3"></div>
   <div className="col-md-6 img-section"><img className="dice-image" src="./dice-image.png" /></div>
   <div className="col-md-3"></div>
   </div>
   <div className="row row3">
       <div className="col-md-3"></div>
   <div className="col-md-3 add-player-section add-player1">
       <input type="text" value={firstPlayer} className="input-player-name inp-1" onChange={(e)=>setFirstPlayer(e.target.value)} placeholder="Add Player 1" />
        <p id="playerOneWarning">{warning1}</p>
        </div>
   <div className="col-md-3 add-player-section add-player2">
       <input type="text" value={secondPlayer} className="input-player-name inp-2" onChange={(e)=>setSecondPlayer(e.target.value)} placeholder="Add Player 2" />
        <p id="playerTwoWarning">{warning2}</p>
        </div>
   <div className="col-md-1 play-button-section">

     <button onClick={handleSubmit} className="play-button">Play</button>
       </div>
   <div className="col-md-2"></div>
        </div>
        </div>
    )
}
export default AddPlayers