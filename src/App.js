import React, { Component } from 'react';
import './App.css';
import Searchbox from './components/Searchbox/Searchbox.js';
import Header from './components/Header/Header.js';
import Layout from './hoc/Layout.js';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render(){
     return (
       <BrowserRouter>
    <Layout>
         <Header />
         
    </Layout>
    </BrowserRouter>
  );
  }
}

export default App;
