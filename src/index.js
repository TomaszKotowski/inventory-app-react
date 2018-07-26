import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routers/Router';


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
