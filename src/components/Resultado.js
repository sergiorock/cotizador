import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Resultado extends Component {
    render() {
        const resultado = this.props.resultado;
        const mensaje = (!resultado) ? "Elige Marca, Año y tipo de Seguro" : "El total es: "
        return(
            <div className="gran-total">
            {mensaje}
            <TransitionGroup component="span" className="resultado">
                <CSSTransition 
                    classNames="resultado" 
                    key={resultado}
                    timeout={{enter: 500, exit: 500}}>
                    <span>{resultado}</span>
                </CSSTransition>
            </TransitionGroup>
        </div>
        )
    }
}
export default Resultado;