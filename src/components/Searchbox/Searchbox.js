import { Component } from 'react';
import classes from './Searchbox.module.css';
import Results from '../Results/Results.js';
import Repos from '../Results/Repos/Repos.js';
import { Route } from 'react-router-dom';

class Searchbox extends Component{
    state={
        username: '',
        showresult: false
    }
    
    searchHandler = () => {
        this.setState({showresult: true});
    }
    
    

    render(){
     const results = this.state.showresult ? <Route path="/" exact>
                    <Results username={this.state.username} /></Route>
      : null;
            
        return(
            <div className={classes.container}>
            <input 
                   type="text" 
                   value={this.state.username}
                   placeholder="type username here..."
                   onChange={ (event) =>{
                                     this.setState({username: event.target.value});
                    } } />
            <button type="submit" className={classes.myButton} onClick={this.searchHandler}> Search </button>
            
            
            {results}
            <Route path="/repos">
                <Repos username={this.state.username} /></Route>
            </div>
            
        );
    }
}

export default Searchbox; 