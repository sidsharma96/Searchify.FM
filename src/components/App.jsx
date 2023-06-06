import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import SecondPage from '../pages/SecondPage';
import ErrorPage from '../pages/ErrorPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/artist' element={<SecondPage />} />
          <Route path='/error' element={<ErrorPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
