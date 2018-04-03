import React, { Component } from 'react';

import './App.css';
// import Results from './Components/API-response';
import Results from './Components/response/API-response';
import Form from './Components/form/form';
import Header from './Components/header/header';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Results />
      </div>
    );
  }
}

export default App;
