import React, {
    useState, useEffect
  } from 'react';

import Tablero from "./Tablero";

const Juego = () => {

    const [historial, setHistorial] = useState([{
      cuadrados: Array(9).fill(null)
    }]);
    const [pasoNumero, setPasoNumero] = useState(0);
    const [XesSiguiente, setXesSiguiente] = useState(true);
  
    const handleClick = (i) => {
      let historialCopy = historial.slice(0, pasoNumero + 1);
      const concurrencia = historialCopy[historialCopy.length - 1]
      const cuadros = concurrencia.cuadrados.slice();
      if (calculateWinner(cuadros) || cuadros[i]) {
        return;
      }
      cuadros[i] = XesSiguiente ? 'X' : 'O';

      setHistorial(historialCopy.concat([{
        cuadrados: cuadros,
      }]));
      setPasoNumero(historialCopy.length);
      setXesSiguiente(!XesSiguiente);
    }

    const jumpTo = (paso) => {
      setPasoNumero(paso);
      setXesSiguiente((paso % 2) === 0);
    }
  
    const hist = historial;
    const concurrencia = hist[pasoNumero];
    const ganador = calculateWinner(concurrencia.cuadrados);
  
    const movimientos = hist.map((paso, movimiento) => {
      const desc = movimiento ?
        'Ir al moviento #' + movimiento :
        'Iniciar nuevo juego';
      return (
        <li key={movimiento}>
          <button onClick={() => jumpTo(movimiento)}>{desc}</button>
        </li>
      );
  
    });
  
  
    let estatus;
    if (ganador) {
      estatus = 'Ganador: ' + ganador;
    } else {
      estatus = 'Siguiente jugador: ' + (XesSiguiente ? 'X' : 'O');
    }
  
  
    return (
      <div className="game">
        <div className="game-board">
          <Tablero
            cuadrados={concurrencia.cuadrados}
            /*onClick={(i) =>{
            return  handleClick(i)
            } }*/
            onClick={i =>  handleClick(i) }/*lo mismo de arriba pero simplificado */
          />
        </div>
        <div className="game-info">
          <div>{estatus}</div>
          <ol>{movimientos}</ol>
        </div>
        <div>Hola mundo</div>
      </div>
    );
  
  }

  
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default Juego;
