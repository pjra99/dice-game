import GameScreen from './GameScreen.js'
import ReactDOM from 'react-dom'
import { useState } from 'react';
import React from 'react';
import AddPlayers from './AddPlayers.js';

function RulesScreen(props) {

    const [winningScore, setWinningScore]= useState(0)

    function handleClick(){
 
        var p3 = document.getElementById('warning3')
 
        if(winningScore==0){
            p3.innerHTML="Please add the Winning Score."
            return false
        }
      
        ReactDOM.render(<GameScreen 
            player1={props.player1} 
            player2={props.player2} 
            winningScore={winningScore} 
            />, document.getElementById('root'))
    }
    const warningStyle={
        color: 'red'
    }
    return (
        <div className="container-fluid">
        <div className="row row1">
            <div className="col-md-5"><button onClick={
                ()=>ReactDOM.render(<AddPlayers />, document.getElementById('root'))}>Back</button></div>
            <div className="col-md-4">
                Hi: {props.player1} & {props.player2}   
            </div>
            <div className="col-md-3"></div>
        </div>
        <div className="row row2">
     <div className="col-md-5"></div>
     <div className="col-md-4">Rules Of The Game</div>
     <div className="col-md-3"></div>
        </div>
        <div className="row row3">
            <div className="col-md-2"></div>
            <div className="col-md-8"> <p>- The game has 2 players, playing in rounds.</p>
<p>- Within a round, a player rolls a dice as many times as they wish. Each result get added to their ROUND score. Meanwhile other player waits for their turn in this ROUND.</p>
<p>- If the player rolls a 1 on the dice, all their ROUND score gets lost. After that, it's the next player's turn.</p>
<p>- The first player can choose to 'Hold' the ROUND score in between turns, which means that his ROUND score gets added to his GLOBAL score. After that, it's again the next player's turn</p>
<p>- The first player to reach 100 points on GLOBAL score wins the game</p></div>
            <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    </div>
                <div className="col-md-1"></div>
                <div className="col-md-3"><input type="number" onChange={(e)=>setWinningScore(e.target.value)} placeholder="Set a Winning Score" />
                <p id="warning3" style={warningStyle}>
                    </p>
                    </div>
                <div className="col-md-2"><button onClick={handleClick}>Start Playing</button></div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}
export default RulesScreen