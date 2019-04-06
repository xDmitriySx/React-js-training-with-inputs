import React, { Component } from 'react';
import './App.css';

class App extends Component {

      state = {
        countries: []
      }



      handleChange(e, index){
        this.state.countries[index] = e.target.value
        this.setState({
          countries: this.state.countries
        })
      }

      addCountry(){
        this.setState({
          countries: [...this.state.countries, '']
        })
      }

  render() {
    console.log(this.state.countries)
    return (
      <div className="App">
        <h1> ThE FORM </h1>
        <label> Adress </label>
        { this.state.countries.map((country, index) => {
            return(
              <div key={index}>
                  <input onChange={(e) => this.handleChange(e, index)} />
              </div>
            )
        }) }
        <hr />
        <button onClick={(e) => this.addCountry(e)}> Add Country </button>
        <hr />
        <button> Submit </button>

      </div>
    );
  }
}

export default App;
