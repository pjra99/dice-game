import one from './images/one.png'
import two from './images/two.png'
import three from './images/three.png'
import four from './images/four.png'
import five from './images/five.png'
import six from './images/six.png'
import React, {useState, useEffect} from 'react'
import './css/GameScreen.css'
import {useHistory} from "react-router-dom"

function GameScreen (){
    
    const history = useHistory();

    const [index1, setIndex1] = useState(Math.floor(Math.random() * 6));
    const [index2, setIndex2] = useState(Math.floor(Math.random() * 6));
    
    const playerOne = history.location.state.player1
    const playerTwo = history.location.state.player2
    const winningScore = history.location.state.winningScore

    const [turn, setTurn] = useState(1)
    const [flag1, setFlag1] = useState(0)
    const [flag2, setFlag2] = useState(0)
    const [totalScore1, setTotalScore1] = useState(0)
    const [totalScore2, setTotalScore2] = useState(0)
    const [roundScore1, setRoundScore1] = useState(0)
    const [roundScore2, setRoundScore2] = useState(0)
    
    function handleClick1(){

        const message = document.getElementById('displayMessage')
        message.innerHTML= ""

        if(totalScore1 >=winningScore || totalScore2 >= winningScore) {
            totalScore1>totalScore2?message.innerHTML=`${playerOne} has Won!`: message.innerHTML=`${playerTwo} has Won!`;
            return false;
        }
        if(flag1==1){
            message.innerHTML= `It's ${playerTwo}'s turn`
            return false
        }
        var i = Math.floor(Math.random() * 6)
        setIndex1(i)
        if(i==0){
            setRoundScore1(0);
            setFlag1(1)
            setFlag2(0)
            return;
        }
        setRoundScore1(roundScore1+i+1)
        setTurn(turn+1)
    }

    useEffect(()=>{
        const message = document.getElementById('displayMessage')
        if(totalScore1>=winningScore){
           message.innerHTML=`${playerOne} has won!`
        }
    }, [totalScore1])

    useEffect(()=>{
        const message = document.getElementById('displayMessage')
        if(totalScore2>=winningScore){
            message.innerHTML=`${playerTwo} has won!`
        }
    }, [totalScore2])

    function handleClick2(){
        const message = document.getElementById('displayMessage')
        message.innerHTML=""
        if(totalScore1 >=winningScore || totalScore2 >= winningScore) {
            totalScore1>totalScore2?message.innerHTML=`${playerOne} has Won!`: message.innerHTML=`${playerTwo} has Won!`;
            return false;
        }
        if(flag2==1){
            message.innerHTML= `It's ${playerOne}'s turn`
            return false;
        }
        var i = Math.floor(Math.random() * 6)
        setIndex2(i)
        if(i==0){
            setRoundScore2(0);
            setFlag1(0)
            setFlag2(1)
            return
        }
        setRoundScore2(roundScore2+i+1)
        setTurn(turn+1)

    }

    function handleHoldClick1(){
    
    setTotalScore1(totalScore1+roundScore1)
    setRoundScore1(0)
    setFlag1(1)
    setFlag2(0)

    }
    function handleHoldClick2(){
    
        setTotalScore2(totalScore2+roundScore2)
        setRoundScore2(0)
        setFlag2(1)
        setFlag1(0)
        }
    var ar = [
        one, 
        two, 
        three, 
        four, 
        five, 
        six
    ]

    return (
        <div className="container-fluid game-screen">
            <div className="row game-screen-header">
                <div className="col-md-5"> 
    
                 <button onClick={()=> history.push({
                     pathname: '/rulesscreen',
                     state: {
                         player1: playerOne,
                         player2: playerTwo
                     }
                 })}className="back-button">
                         back</button>
                         </div>
                <div className="col-md-6"><p id="displayMessage"></p></div>
                <div className="col-md-2"></div>
            </div>
            <div className="row row2">
                <div className="col-md-1"> </div>
                <div className="col-md-4 dice"> 
                <div className="row nested-row-left-player-name">
                     <div className="col-md-2"></div>
            <div className="col-md-5">  {playerOne}'s dice</div>
            <div className="col-md-5"></div>
            </div>
                <div className="row nested-row-left-dice">
       <button onClick={handleClick1}> 
             <img id="dice1" src={ar[index1]} />
       </button>
       </div>
       <div className="row nested-row-left-scores">
       <div className="col-md-2"></div>
            <div className="col-md-7">  
            Score:<br />
            Round Score: {roundScore1} <button className="hold-button" onClick={handleHoldClick1}>Hold</button> <br />
            Total Score: {totalScore1} <br />
            </div>
            <div className="col-md-3"></div>
       </div>
        </div>
        <div className="col-md-2 winning-score"> Winning Score : {winningScore}

        <button className="reset-button" onClick={()=>{
            const message = document.getElementById('displayMessage')
                                            setTurn(1)
                                            setFlag1(0)
                                            setFlag2(0)
                                            setTotalScore1(0)
                                            setTotalScore2(0)
                                            setRoundScore1(0)
                                            setRoundScore2(0)
                                            message.innerHTML=""
                                          
                                        }}>Reset Game</button>
    </div>

        <div className="col-md-4 dice">
        <div className="row nested-row-right-player-name">
            <div className="col-md-2"></div>
            <div className="col-md-4">  {playerTwo}'s dice</div>
            <div className="col-md-6"></div>
            </div>
       <div className="row nested-row-right-dice">
       <button 
onClick={handleClick2}> 
             <img id="dice2" src={ar[index2]} />
       </button>
       </div>
       <div className="row nested-row-right-scores">
       <div className="col-md-2"></div>
            <div className="col-md-6">  
            Score: <br />
            Round Score: {roundScore2} <button className="hold-button" onClick={handleHoldClick2}>Hold</button> <br />
            Total Score: {totalScore2} <br />
           </div>
            <div className="col-md-3"></div>
       </div>
       </div>
        <div className="col-md-1"></div>
          </div>
        </div>
    )
}
export default GameScreen