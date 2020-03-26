import React, { Component } from 'react';
import axios from 'axios';
import RatingInformation from './components/RatingInformation/RatingInformation';
import QuoteOverview from './components/QuoteOverview/QuoteOverview';

class App extends Component{
  state = {
    errors: {},
    quote: null
  }

  // UPDATES THE STATES
  handleStateChange = (label, value) => {
    this.setState({[label]: value})
  }

  // API POST REQUEST 
  handleSubmit = async (values) => {
    try{
      this.handleStateChange('errors', {}) //reset error
      let { data } = await axios.post('https://fed-challenge-api.sure.now.sh/api/v1/quotes', values)
      this.handleStateChange('quote', data)
    }
    catch(error){
      if(error.request){
        this.handleStateChange("errors", JSON.parse(error.request.response).errors) //update error from API
      }
    }
  }

  render(){
    return (
      <div className="App">
        {
          this.state.quote ? 
          <QuoteOverview quoteData={this.state.quote} writeToParent={(label, value) => this.handleStateChange(label, value)}/> :
          <RatingInformation parentErrors={this.state.errors} parentHandleSubmit={this.handleSubmit}/>
        }
      </div>
    );
  }
}

export default App;
