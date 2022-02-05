import React from 'react';
import { PLAYER1 } from '../../../keys/players';
import '../box/box.css';
const Box = ({player,switchPlayer,index,boxState})=> {
    const clickHandler = ()=>{
        if(boxState[index]) return;

        switchPlayer(index,player)
    }
  return <>
    <div className={`box-main ${boxState[index]}`} onClick={clickHandler}>
      {boxState[index] && (boxState[index] == PLAYER1 ?'X ': 'O ')}
    </div>
  </>;
}

export default Box;
