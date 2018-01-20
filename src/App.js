import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header/Header';
import Content from './Content/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Content></Content>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
