import { useState } from 'react';
import React from 'react';
import {Link, useHistory } from "react-router-dom"
import './css/RulesScreen.css'

function RulesScreen() {

    const history = useHistory();
   
    const [winningScore, setWinningScore]= useState(0)
    const playerOne = history.location.state.player1
    const playerTwo = history.location.state.player2

    console.log(history)

    function handleClick(){
 
        var p3 = document.getElementById('warning3')
 
        if(winningScore==0){
            p3.innerHTML="Please add the Winning Score."
            return false
        }
        console.log(history)
       history.push({pathname: '/gamescreen',
                    state: {
                        player1: playerOne,
                        player2: playerTwo,
                        winningScore: winningScore
                    }    
                })
    }
    const warningStyle={
        color: 'red'
    }
    return (
        <div className="container-fluid welcome-screen">
        <div className="row rules-screen-header">
            <div className="col-md-5"><Link to="/addplayers"><button className="back-to-add-players">Back</button></Link></div>
            <div className="col-md-4 greet-players">
                Hi: <span style={{
                    color:'#fff600'
                }}>{playerOne}</span> & <span style={{
                    color:'#fff600'
                }}>{playerTwo}  </span> 
            </div>
            <div className="col-md-3"></div>
        </div>
        <div className="row row2">
     <div className="col-md-5"></div>
     <div className="col-md-4 rule-list-title">Rules Of The Game</div>
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
                <div className="col-md-3">
                    </div>
                <div className="col-md-1"></div>
                <div className="col-md-3"><input type="number" onChange={(e)=>setWinningScore(e.target.value)} className="input-winning-score" placeholder="Set a Winning Score" />
                <p id="warning3" style={warningStyle}>
                    </p>
                    </div>
                <div onClick={handleClick} className="col-md-2"><button className="start-playing">Start Playing</button></div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}
export default RulesScreen