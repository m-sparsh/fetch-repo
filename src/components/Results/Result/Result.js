import classes from './Result.module.css';
import { Component } from 'react';
import axios from 'axios';


class Result extends Component {
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
        
        
     return (
        <>
        <div className={classes.card}>
        <img src={this.props.info.avatar_url} alt="avatar_img" />
        
        <p>Username : {this.props.info.login}</p>
        <p>Followers : {this.props.info.followers}</p>
        <p>Following : {this.props.info.following}</p>
        <p>Repos : {this.props.info.public_repos}</p>
        </div>
        <div className={classes.list}>
             <ul>
               {this.state.repos.map(repos => {
            return <li key={repos.id}>{repos.name}</li>
       })}
             </ul>
        </div>
        

        </>
    )
    }
    
}
export default Result;

