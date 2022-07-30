import React from 'react';
import  '../css/Testimonio.css';

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

export default Testimonio;