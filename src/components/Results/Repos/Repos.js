import { Component } from 'react';
import axios from 'axios';
import classes from './Repos.module.css';
class Repos extends Component{
    state = {
        repos: []
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/'+this.props.username +'/repos')
          .then( response => {
            this.setState({repos: response.data});
            console.log(this.state.repos);
          });
    }
    render(){
        return(
            <div className={classes.list}>
             <ul>
               {this.state.repos.map(repos => {
                     return <li key={repos.id}>{repos.name}</li>
       })}
             </ul>
        </div>
        )
    }
}

export default Repos;