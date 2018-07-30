import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routers/Router';
import NavigationView from './models/navigation/navigation.view'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationView />
          <AppRouter />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
