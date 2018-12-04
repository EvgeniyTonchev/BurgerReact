import React, {PureComponent} from 'react';
//import Radium, {StyleRoot} from 'radium'
import Persons from "../components/Persons/Persons"
import Cockpit from "../Cockpit/Cockpit"

import classes from './App.css';


import Person from "../components/Persons/Person/Person"

class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log("[App.js] constructor");

        this.state = {
            persons: [
                {id: 1, name: "Bob", age: 28},
                {id: 2, name: "Max", age: 17},

                {id: 3, name: "Tim", age: 25}
            ],
            showPersons: false,
            toggleClickedTimes: 0,
            authenticated: false
        }
    }

    componentWillMount() {
        console.log("[App.js] componentWillMount()")
    }

    componentDidMount() {
        console.log("[App.js] componentDidMount()")
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("[App.js] shouldComponentUpdate()")
    //     return nextState.persons !== this.state.persons
    //         || nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log("[App.js] componentWillUpdate()")
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
        this.setState( (prevState, props) => {
            return {
                showPersons: !this.state.showPersons,
                toggleClickedTimes: prevState.toggleClickedTimes+1
            }
        });
    }

    deletePersonHandler = (index) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    }

    loginHandler = () => {
        this.setState({authenticated: true})
    }

    render() {
        console.log("[App.js] render()");
        let person = null;


        if (this.state.showPersons) {
            person = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        deletePersonH={this.deletePersonHandler}
                        nameChangerH={this.nameChangerHandler}/>
                </div>
            )
            // style[":hover"] = {
            //     backgroundColor: 'salmon',
            //     color: 'black'
            // }
        }

        return (
            //<StyleRoot>
            <div className={classes.App}>
                <button onClick={() => {this.setState({showPersons:true})}}>Show Persons</button>
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    togglePersonsHandler={this.togglePersonsHandler}
                />
                {person}
            </div>
            // </StyleRoot>
        );
        //   return React.createElement('div', {'className': "App"}, React.createElement('h1', null, 'Hi, I am test App!!!!'))
    }
}

//export default Radium(App);
export default App;
