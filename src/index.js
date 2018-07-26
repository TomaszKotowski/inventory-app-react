import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRouter from './routers/Router';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<AppRouter> <App />  </AppRouter>, document.getElementById('root'));
registerServiceWorker();
