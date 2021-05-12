import { useState } from 'react';
import React from 'react';
import {Link, useHistory } from "react-router-dom"
import './css/RulesScreen.css'

function RulesScreen() {

    const history = useHistory();
   
    const [winningScore, setWinningScore]= useState(0)
    const playerOne = history.location.state.player1
    const playerTwo = history.location.state.player2
    const [warning, setWarning] = useState("")
    
    console.log(history)

    function handleClick(){
          
        if(winningScore==0){
            setWarning("Please add the Winning Score!")
            return false
        }
        if(winningScore<0){
            setWarning("Please add a valid Winning Score!")
            return false;
        }

            setWarning("")
        console.log(history)
       history.push({pathname: '/gamescreen',
                    state: {
                        player1: playerOne,
                        player2: playerTwo,
                        winningScore: winningScore
                    }    
                })
    }
    return (
        <div className="container-fluid rules-screen">
        <div className="row rules-screen-header">
            <div className="col-md-3"><Link to="/addplayers"><button className="back-to-add-players">Back</button></Link></div>
            <div className="col-md-6 greet-players">
                Hi:&nbsp; <span className="player-names" >{playerOne}</span>&nbsp;&&nbsp;<span className="player-names">
                    {playerTwo}  </span> 
            </div>
            <div className="col-md-3"></div>
        </div>
        <div className="row row2">
     <div className="col-md-4"></div>
     <div className="col-md-5 rule-list-title">Rules Of The Game</div>
     <div className="col-md-3"></div>
        </div>
        <div className="row rules-section">
            <div className="col-md-2"></div>
            <div className="col-md-8 rule-list"> <p>- The game has 2 players, playing in rounds.</p>
<p>- Within a round, a player rolls a dice as many times as they wish. Each result get added to their ROUND score. Meanwhile other player waits for their turn in this ROUND.</p>
<p>- If the player rolls a 1 on the dice, all their ROUND score gets lost. After that, it's the next player's turn.</p>
<p>- The first player can choose to 'Hold' the ROUND score in between turns, which means that thier ROUND score gets added to his TOTAL score. After that, it's again the next player's turn</p>
<p>- The first player to reach 100 points on GLOBAL score wins the game</p></div>
            <div className="col-md-2"></div>
            </div>
            <div className="row set-score-section">
                <div className="col-md-4">
                    </div>
                <div className="col-md-3 set-score"><input type="number" onChange={(e)=>setWinningScore(e.target.value)} className="input-winning-score" placeholder="Set a Winning Score" /> <br />
                <p id="warning">
                    {warning}
                    </p>
                    </div>
                <div onClick={handleClick} className="col-md-2 start-play-button-section"><button className="start-playing">Start Playing</button></div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}
export default RulesScreen