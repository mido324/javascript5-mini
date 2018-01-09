import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this)  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    
  
     const theCars = this.state.cars.map((results) => {
       return <h3> {results.make}</h3>
     })
        
  
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>

        {theCars}
      </div>
    );
  }
}

export default App;
