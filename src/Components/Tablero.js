import React, {
    useState, useEffect
  } from 'react';

import Cuadrado from "./Cuadrado";

const Tablero = (props) => {

    const  renderSquare =(i)=> {
      return (
        <Cuadrado
         /* jason="meco" // aqui se declaran las variables que se esperan*/
          valor={props.cuadrados[i]}
          onClick={() => props.onClick(i)}
        />
      );
    }
  
    return (
      <div>
        <div className="board-row"/*en react no se puede usar "class" en vez se utiliza className */>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
  
  }

export default Tablero;
