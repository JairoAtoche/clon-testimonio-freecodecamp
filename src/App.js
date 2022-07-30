import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  let testimonios = {
    shawn: {
      img:'shawn',
      nombre:'Shawn Wang',
      pais: 'Singapur',
      cargo: 'Ingeniero de Software',
      empresa: 'Amazon',
      texto: 'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
    },
    sarah: {
      img:'sarah',
      nombre:'Sarah Chima',
      pais: 'Nigeria',
      cargo: 'Ingeniero de Software',
      empresa: 'ChatDesk',
      texto: 'freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
    },
    emma: {
      img:'emma',
      nombre:'Emma Bostian',
      pais: 'Suecia',
      cargo: 'Ingeniero de Software',
      empresa: 'Spotify',
      texto: 'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
    }    
  };
  return (
    <div className="App">
      <div className='main'>
        <h1 className='main__h1'>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio imagen={testimonios.shawn.img} nombre={testimonios.shawn.nombre} pais={testimonios.shawn.pais} cargo={testimonios.shawn.cargo} empresa={testimonios.shawn.empresa} testimonio={testimonios.shawn.texto} />
        <Testimonio imagen={testimonios.sarah.img} nombre={testimonios.sarah.nombre} pais={testimonios.sarah.pais} cargo={testimonios.sarah.cargo} empresa={testimonios.sarah.empresa} testimonio={testimonios.sarah.texto} />
        <Testimonio imagen={testimonios.emma.img} nombre={testimonios.emma.nombre} pais={testimonios.emma.pais} cargo={testimonios.emma.cargo} empresa={testimonios.emma.empresa} testimonio={testimonios.emma.texto} />
      </div>
    </div>
  );
}

export default App;