import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRouter from './routers/router';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<AppRouter> <App /> </AppRouter>, document.getElementById('root'));
registerServiceWorker();