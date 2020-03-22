import React, { Component } from 'react';
import RatingInformation from './components/RatingInformation';

class App extends Component{

  handleSubmit = (values) => {
    console.log(values)
  }

  render(){
    return (
      <div className="App">
        <RatingInformation parentHandleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
