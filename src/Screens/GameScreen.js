import ReactDOM from "react-dom"
import one from './images/one.png'
import two from './images/two.png'
import three from './images/three.png'
import four from './images/four.png'
import five from './images/five.png'
import six from './images/six.png'
import React, {useState} from 'react'
import RulesScreen from './RulesScreen.js'
import './css/GameScreen.css'

function GameScreen (props){

    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    
    const player1 = props.player1
    const player2 = props.player2
    const winningScore = props.winningScore
    const [turn, setTurn] = useState(1)
    const [flag1, setFlag1] = useState(0)
    const [flag2, setFlag2] = useState(0)
    const [totalScore1, setTotalScore1] = useState(0)
    const [totalScore2, setTotalScore2] = useState(0)
    const [roundScore1, setRoundScore1] = useState(0)
    const [roundScore2, setRoundScore2] = useState(0)
    
    function handleClick1(){
       
        if(totalScore1 >=winningScore || totalScore2 >= winningScore) {
            totalScore1>totalScore2?alert('Player 1 won'):alert('Player 2 won');
            return false;
        }
        if(flag1==1){
            alert('Not your turn')
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

    function handleClick2(){
        
        if(totalScore1 >=winningScore || totalScore2 >= winningScore) {
            totalScore1>totalScore2?alert('Player 1 won'):alert('Player 2 won');
            return false;
        }
        if(flag2==1){
            alert('Not your turn')
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
        <div className="container-fluid">
            <div className="row row1">
                <div className="col-md-3"> 
                 <button className="back-button" 
                 onClick={()=>ReactDOM.render(<RulesScreen />, document.getElementById('root'))}>
                         back</button>
                         </div>
                <div className="col-md-3"></div>
                <div className="col-md-1"></div>
                <div className="col-md-3"></div>
                <div className="col-md-2"></div>
            </div>
            <div className="row row2">
                <div className="col-md-2"> </div>
                <div className="col-md-3 dice"> 
                <div className="row nested-row-left-player-name">
                     <div className="col-md-2"></div>
            <div className="col-md-4">  {player1}'s dice</div>
            <div className="col-md-6"></div>
            </div>
                <div className="row nested-row-left-dice">
       <button onClick={handleClick1}> 
             <img src={ar[index1]} />
       </button>
       </div>
       <div className="row nested-row-left-scores">
       <div className="col-md-2"></div>
            <div className="col-md-7">  
            Score:<br />
            Round Score: {roundScore1} <button onClick={handleHoldClick1}>Hold</button> <br />
            Total Score: {totalScore1} <br />
            </div>
            <div className="col-md-3"></div>
       </div>
        </div>
        <div className="col-md-2"> Winning Score : {winningScore}

        <button onClick={()=>{
                                            setTurn(1)
                                            setFlag1(0)
                                            setFlag2(0)
                                            setTotalScore1(0)
                                            setTotalScore2(0)
                                            setRoundScore1(0)
                                            setRoundScore2(0)
                                          
                                        }}>Reset Game</button>
    </div>

        <div className="col-md-4 dice">
        <div className="row nested-row-right-player-name">
            <div className="col-md-2"></div>
            <div className="col-md-4">  {player2}'s dice</div>
            <div className="col-md-6"></div>
            </div>
       <div className="row nested-row-right-dice">
       <button onClick={handleClick2}> 
             <img src={ar[index2]} />
       </button>
       </div>
       <div className="row nested-row-right-scores">
       <div className="col-md-2"></div>
            <div className="col-md-6">  
            Score: <br />
            Round Score: {roundScore2} <button onClick={handleHoldClick2}>Hold</button> <br />
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