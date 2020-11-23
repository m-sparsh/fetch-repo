import React , { useState, useEffect} from 'react';
import { Form, Card, Image, Icon } from 'semantic-ui-react';

import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';

function App() {



return (
    <div className="App">
    <h1>Repo Search</h1>
    <SearchBar />
    
    </div>
  );
}

export default App;
