import React from 'react';//Import to use JSX
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css'
import BadgeNew from './pages/BadgeNew';

// const name = 'Tonio';
// const element =React.createElement('a',{href: 'https://Platzi.com'},`${name} has learned thanks to Platzi`);//This is JSX
// const element = <h1>I am {name} a Web developer using Reac!!</h1> // Expressions can reside inside {} as functions, operations etc.
//Reason to not use React.createElement
// const element = <div>
//   <h1>I am {name}</h1>
//   <p>Web developer, specialized in Frontend</p>
// </div>
//Otherwise 
// const element = React.createElement('div',{},
// React.createElement('h1',{},`I am ${name}`),
// React.createElement('p',{},'I am Web developer'));

const container = document.getElementById('app');

ReactDOM.render(<BadgeNew/>, container); // --> Badge is a class so make sure to put </> that indicates it's an element;
//render parameters: (from, to);
