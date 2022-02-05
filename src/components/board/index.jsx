import React, { useEffect, useState } from 'react';
import Box from './box';
import './board.css';
import { PLAYER1, PLAYER2 } from '../../keys/players';
import { winnerCheck } from '../../function/winnerCheck';
const Board =()=> {
    const [player,setPlayer] = useState(PLAYER1);
    const [boxState,setBoxState] = useState(new Array(9).fill(''));
    const switchPlayer =(index,player)=>{
        setBoxState(prev=>{
            prev[index] = player;
            return prev
        })
        setPlayer(prev=>{
            if(prev === PLAYER1) return PLAYER2
            return PLAYER1
        })
    }
useEffect(()=>{
  const winner  =  winnerCheck(boxState);
  if(!winner) return;

   alert((winner == PLAYER1 ? 'Player 1':'Player 2') + ' won.');
   setBoxState(new Array(9).fill(''))
},[player])
const resetHandler=()=>{
  setBoxState(new Array(9).fill(''));
  setPlayer(PLAYER1)
}
  return <>
  <div>
  <div className='header'> {player == PLAYER1? 'Player 1':'Player 2'}</div>
    <div className="board-main">
        {[0,1,2,3,4,5,6,7,8].map((elem)=>
        <Box  
         index={elem}
         key={elem}
         boxState={boxState}
         player={player} 
         switchPlayer={switchPlayer}
           />)}
    </div>
  <button className="reset" onClick={resetHandler}>Reset</button>
</div>
  </>;
}

export default Board
