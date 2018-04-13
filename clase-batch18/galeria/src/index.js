import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Pizzas from './components/pizzas/Pizzas.js'

ReactDOM.render(<Pizzas />, document.getElementById('root'));
registerServiceWorker();
