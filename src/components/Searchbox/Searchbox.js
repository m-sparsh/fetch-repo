import { Component } from 'react';
import classes from './Searchbox.module.css';
import Results from '../Results/Results.js';

class Searchbox extends Component{
    state={
        username: '',
        showresult: false
    }
    searchHandler = () => {
        this.setState({showresult: true})
    }

    

    render(){
        
     const results = this.state.showresult ? <Results username={this.state.username} /> : null;
        
        return(
            <div id="particle-js" >
            <div className={classes.container}>
            <input 
                   type="text" 
                   value={this.state.username}
                   placeholder="type username here..."
                   onChange={ (event) =>{
                                     this.setState({username: event.target.value});
                    } } />
            <button className={classes.myButton} onClick={this.searchHandler}> Search </button>
            
            </div>
            {results}
            </div>
        );
    }
}

export default Searchbox; 