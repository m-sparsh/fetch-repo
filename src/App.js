import React, { Component } from 'react';
import './App.css';
import Searchbox from './components/Searchbox/Searchbox.js';
import Header from './components/Header/Header.js';
import Layout from './hoc/Layout.js';

class App extends Component {

  render(){
     return (
    <Layout>
         <Header />
         <Searchbox />
    </Layout>
  );
  }
}

export default App;
