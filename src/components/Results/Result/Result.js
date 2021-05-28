import classes from './Result.module.css';
import { Component } from 'react';



class Result extends Component {
    

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
        
        

        </>
    )
    }
    
}
export default Result;

