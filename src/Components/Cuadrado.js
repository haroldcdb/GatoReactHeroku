import React from 'react';


const Cuadrado = (props) => {//aqui pasa los parametros

    return (
        <button className="square" onClick={props.onClick}>
            {props.valor}
            {/*props.jason // así se pasarian los parametros*/ }
        </button>
    );
}

export default Cuadrado;