import React from 'react';

function Testimonio() {
  return(
    <div className='testimonio'>
      <img className='testimonio__img' src={require('../img/testimonio-emma.png')} alt='Fotografia de Emma'/>
      <div className='testimonio__contenido'>
        <p className='testimonio__nombre'>Emma Bostian en Suecia</p>
        <p className='testimonio__cargo'>Ingeniera de Software en Spotify</p>
        <p className='testimonio__texto'>"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>
      </div>
    </div>
  );
}

export default Testimonio;