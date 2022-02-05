import { winingCase } from "../data/winingCase"
export const winnerCheck =(checkedBox)=>{
    const length = winingCase.length;
    for(let i=0; i<length ; i++){
    const [a,b,c] = winingCase[i];
     if(checkedBox[a] && checkedBox[a] ==  checkedBox[b] && checkedBox[a] == checkedBox[c]) return checkedBox[a];

    }
    return null;
}

