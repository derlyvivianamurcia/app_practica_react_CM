import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './components/styles/Global.css'
import InsigniaNueva from './pages/InsigniaNueva';
//import App from './App';

ReactDOM.render(
  <>
    <InsigniaNueva />
  </>,
  document.getElementById('root')
);

// CODIGO JSX
 /*  const jsx = <h1>hola estudiantes</h1>;
  const container = document.getElementById('root')

  ReactDOM.render(
    jsx,
    container
  )
 */

 //JS

/*  const elemento = React.createElement('h1', {},'hola estudiantes')
 const container = document.getElementById('root');
    ReactDOM.render(
      elemento,
      container,
    )
 */

/*  const elemento = React.createElement('a', {href: 'https://github.com/derlyvivianamurcia'}, 'Ir a gitHub');

 const container = document.getElementById('root');

 ReactDOM.render(
   elemento,
   container
 )
 */

//  const name = 'Viviana'
//  const elemento = React.createElement('h1', {}, `hola, soy ${name}`);
//  const container = document.getElementById('root');

//  ReactDOM.render(
//   elemento,
//   container
// )

//JSX
/* const name = 'Viviana'
const jsx = <h1>hola, soy {name}</h1>
const container = document.getElementById('root');

ReactDOM.render(
   jsx,
    container
  )
   */
/*   const jsx = <h1>El resultado de la suma es: {2+2}</h1>
  const container = document.getElementById('root');
  
  ReactDOM.render(
     jsx,
      container
    ) */

    /* const suma = () => 3+5;
    const jsx = <h1>La suma es: {suma()}</h1>
    const container = document.getElementById('root');
    ReactDOM.render(
      jsx,
      container
    ) */

    /* const jsx =
    <div>
      <h1>
        hola mundo
      </h1>
      <p>
        Soy desarrolladora FrontEnd
      </p>
    </div>
    const container = document.getElementById('root');
    ReactDOM.render(
      jsx,
      container
    ) */

    //JS
  /*   const elemento = React.createElement(
      'div',
      {},
      React.createElement('h1', {}, 'Hola mundo'),
      React.createElement('p', {}, 'Soy desarrolladora FrontEnd')
    )
const container = document.getElementById('root');

ReactDOM.render(
  elemento,
  container
)

 */
