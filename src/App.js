import React, { Component } from 'react';
import axios from 'axios';
import RatingInformation from './components/RatingInformation';

class App extends Component{
  state = {
    errors: {}
  }

  handleSubmit = async (values) => {
    try{
      this.setState({errors: {}}) //reset error
      let { data } = await axios.post('https://fed-challenge-api.sure.now.sh/api/v1/quotes', values)
      console.log(data)
    }
    catch(error){
      if(error.request){
        this.setState({errors: JSON.parse(error.request.response).errors}) //update error from API
      }
    }
  }

  render(){
    return (
      <div className="App">
        <RatingInformation parentErrors={this.state.errors} parentHandleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
