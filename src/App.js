import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
        { name:"Bob", age:28},
        { name:"Max", age:17},
        { name:"Tim", age:25}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am test App.</h1>
        
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>And I am rly cool!</Person><br />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>And I am from Texas.</Person><br />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //   return React.createElement('div', {'className': "App"}, React.createElement('h1', null, 'Hi, I am test App!!!!'))
  }
}

export default App;
