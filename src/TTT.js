import React, { Component } from 'react';
import './TTT.css';
import Square from './Square.js';

class TTT extends Component {

  render() {
    const {myFunc, myFuncTwo, boardpositions, boardset, boardnumber, availableBoard, allBoards, outerboard, winIDs} = this.props
    var boardcontent;
    var color;

    const wins = {
      "012": <line x1="10" y1="31" x2="152" y2="31" className={"linecross"} id={"012"}></line>,
      "345": <line x1="10" y1="81" x2="152" y2="81" className={"linecross"} id={"345"}></line>,
      "678": <line x1="10" y1="131" x2="152" y2="131" className={"linecross"} id={"678"}></line>,
      "036": <line x1="31" y1="10" x2="31" y2="152" className={"linecross"} id={"036"}></line>,
      "147": <line x1="81" y1="10" x2="81" y2="152" className={"linecross"} id={"147"}></line>,
      "258": <line x1="131" y1="10" x2="131" y2="152" className={"linecross"} id={"258"}></line>,
      "048": <line x1="10" y1="10" x2="152" y2="152" className={"linecross"} id={"048"}></line>,
      "246": <line x1="152" y1="10" x2="10" y2="152" className={"linecross"} id={"246"}></line>
    }

    function wrapBoard(renderElement) {
      return <div>
               <table className="smallTable">
                 <tbody id="center">
                 {[0, 1, 2].map((item, i) => 
                   <tr>{[0, 1, 2].map((item, j) => 
                     renderElement(i, j))}
                   </tr>)}
                 </tbody>
               </table>
             </div>
    }
    

    if (boardset) {
      boardcontent = wrapBoard((i, j) => <td className="innerboard">
                               <Square
                                 position={[boardnumber, 3*i+j]} 
                                 myFunc={myFunc} 
                                 myFuncTwo={myFuncTwo}
                                 content={boardpositions[boardnumber][3*i+j]}
                                 availableBoard={availableBoard}
                                 allBoards={allBoards}>
                               </Square>
                             </td>)
                             
    }

    else {
      boardcontent = <div>
                       <table className="bigTable">
                         <tbody>
                         {[0, 1, 2].map((item, i) =>
                           <tr>{[0, 1, 2].map((item, j) =>
                             <td className={"outerboard"+ ((this.props.nextBoard == 3*i+j) ? " nextBoard" : ((availableBoard === 3*i+j || allBoards) ? " bold" : ""))}>
                               <div className={"outerboardWon"}>
                                {(outerboard[3*i+j])}
                               </div>
                               {winIDs[3*i+j] && 
                                <div className={"winMark"}>
                                  <svg className={"svgclass"}>
                                    {wins[winIDs[3*i+j]]}
                                  </svg>
                                </div>
                               }
                               <div className={"winMark"}>
                                 <svg className={"svgclass"}>
                                  wins[winIDs[3*i+j]]
                                </svg>
                               </div>
                               <TTT 
                                 boardset={true}
                                 boardpositions={boardpositions}
                                 myFunc={myFunc}
                                 myFuncTwo={myFuncTwo}
                                 boardnumber={3*i+j}
                                 availableBoard={availableBoard}
                                 allBoards={allBoards}>
                               </TTT>
                             </td>)}
                           </tr>)}  
                         </tbody>  
                       </table>
                     </div>
    }

    return (
      <div className="game">
        {boardcontent}
      </div>
    );
  };
} 

export default TTT;

/*
<line x1="10" y1="10" x2="152" y2="152" className={"linecross"} id={"048"}></line>
                                  <line x1="152" y1="10" x2="10" y2="152" className={"linecross"} id={"246"}></line>
                                  <line x1="81" y1="10" x2="81" y2="152" className={"linecross"} id={"147"}></line>
                                  <line x1="10" y1="81" x2="152" y2="81" className={"linecross"} id={"345"}></line>
                                  <line x1="10" y1="31" x2="152" y2="31" className={"linecross"} id={""}></line>
                                  <line x1="10" y1="81" x2="152" y2="81" className={"linecross"} id={""}></line>
                                  <line x1="31" y1="10" x2="31" y2="152" className={"linecross"} id={""}></line>
                                  <line x1="81" y1="10" x2="81" y2="152" className={"linecross"} id={""}></line>
                                  <line x1="10" y1="131" x2="152" y2="131" className={"linecross"} id={""}></line>
                                  <line x1="131" y1="10" x2="131" y2="152" className={"linecross"} id={""}></line>
*/