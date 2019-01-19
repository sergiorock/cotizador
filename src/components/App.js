import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen'
import Resultado from './Resultado'
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper';


class App extends Component {
  state = {
    resultado: '',
    datos: {}
  }
  cotizarSeguro = (datos) => {
    const { marca, year, plan } = datos;

    //Agregar una base de 2000
    let resultado = 2000;

    //Obetener la diferencia de años y 
    const diferencia = obtenerDiferenciaAnio(year)

    //por cada año restar el 3% al valor del seguro
    resultado -= (( diferencia * 3) * resultado) / 100;

    //Americano 15% asiático 5% y europeo 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;

    //El plan del auto, el básico incrementa el valor 20% y cobertura copleta 50%
    let incrementoPlan = obtenerPlan(plan);

    //Dependiendo del plan, incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    //Crear objeto para el resumen
    const datosAuto = {
      marca: marca,
      year: year,
      plan: plan
    }
    
    this.setState({
      resultado: resultado,
      datos: datosAuto

    })


  }
  render() {
    return (
      <div className="contenedor">
        < Header 
          titulo = "Cotizador de seguros de Auto"
        />

        <div className="contenedor-formulario">
          < Formulario 
            cotizarSeguro = {this.cotizarSeguro}  
          />

          < Resumen 
            datos = {this.state.datos}
          />

          < Resultado 
            resultado = {this.state.resultado}
          />
        </div>
      </div>
    );
  }
}

export default App;
