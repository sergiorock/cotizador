import React, { Component } from 'react';

class Resultado extends Component {
    mostrarResultado = () => {
        const resultado = this.props.resultado;
        const leyenda = "Elige Marca, Año y tipo de Seguro";
        if(!resultado) return leyenda;

        return(
            <div className="gran-total">
                <p>El total es ${resultado}</p>
            </div>
        )
    }

    render() {
        return(
            <div className="gran-total">
                { this.mostrarResultado() }
            </div>
        )
    }
}
export default Resultado;