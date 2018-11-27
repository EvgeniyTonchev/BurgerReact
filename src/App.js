import React, { Component } from 'react';
import './App.css';
import "./Person/Person.css"
import Person from "./Person/Person"

class App extends Component {
  state = {
      persons: [
          {id: 1, name: "Bob", age: 28},
          {id: 2, name: "Max", age: 17},
          {id: 3, name: "Tim", age: 25}
      ],
      showPersons: false
  }

  nameChangerHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
         return p.id === id;
      });

      const person = {...this.state.persons[personIndex]};

      person.name = event.target.value;

      const persons = this.state.persons;

      persons[personIndex] = person;

    this.setState(
        {
            persons: persons
        }
    )
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  deletePersonHandler = (index) => {
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(index, 1);
      this.setState({persons: persons});
  }

  render() {
    const style ={
      backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

    let person = null;

    if (this.state.showPersons) {
        person = (
        <div>
            {this.state.persons.map((person, index) => {
                return <Person
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    personDeleter = {() => this.deletePersonHandler(index)}
                    nameChanger = {(event) => this.nameChangerHandler(event, person.id)}/>
            })}
        </div>
        )
    }

    return (
      <div className="App">
        <h1>Hi, I am test App.</h1>
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {person}
      </div>
    );
    //   return React.createElement('div', {'className': "App"}, React.createElement('h1', null, 'Hi, I am test App!!!!'))
  }
}

export default App;
