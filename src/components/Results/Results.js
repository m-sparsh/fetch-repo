import { Component } from 'react';
import axios from 'axios';
import Result from './Result/Result.js';

class Results extends Component {
  
  state={
    info: {}
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/'+this.props.username)
    .then( response =>{
      this.setState({info: response.data});
     console.log(this.state.info);
     console.log(this.props);
    });
  }


  render(){
    return (
        <Result info={this.state.info} 
                username={this.props.username} />
    )
  }
}

export default Results;

//