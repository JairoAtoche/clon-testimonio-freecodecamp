import React from 'react';
import  '../css/Testimonio.css';

/*** Componente funcional ***/
/*
function Testimonio(props) {
  return(
    <div className='testimonio'>
      <img className='testimonio__img' src={require(`../img/testimonio-${props.imagen}.png`)} alt={`Fotografia de ${props.imagen}`}/>
      <div className='testimonio__contenido'>
        <p className='testimonio__nombre'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='testimonio__cargo'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='testimonio__texto'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}
*/

/*** Componente de clase ***/
class Testimonio extends React.Component {
  render() {
    return (
      <div className='testimonio'>
          <img className='testimonio__img' src={require(`../img/testimonio-${this.props.imagen}.png`)} alt={`Fotografia de ${this.props.imagen}`}/>
        <div className='testimonio__contenido'>
          <p className='testimonio__nombre'><strong>{this.props.nombre}</strong> en {this.props.pais}</p>
          <p className='testimonio__cargo'>{this.props.cargo} en <strong>{this.props.empresa}</strong></p>
          <p className='testimonio__texto'>"{this.props.testimonio}"</p>
        </div>
      </div>
    )
  }
}

export default Testimonio;