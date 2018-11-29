import React, { Component } from 'react';
//import Radium, {StyleRoot} from 'radium'

import Person from "./Person/Person"

import classes from './App.css';

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

    let person = null;
    let buttonClass = '';


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
        // style[":hover"] = {
        //     backgroundColor: 'salmon',
        //     color: 'black'
        // }
        buttonClass = classes.Red;
    }

    let divClasses = [];

    if (this.state.persons.length <= 2){
        divClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1){
        divClasses.push(classes.bold);
    }

    let classesString = divClasses.join(' ');

    return (
            //<StyleRoot>
              <div className={classes.App}>
                <h1 className={classesString}>Hi, I am test App.</h1>
                  <button className={buttonClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                  {person}
              </div>
            // </StyleRoot>
    );
    //   return React.createElement('div', {'className': "App"}, React.createElement('h1', null, 'Hi, I am test App!!!!'))
  }
}

//export default Radium(App);
export default App;
