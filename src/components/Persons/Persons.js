import React, {Component} from 'react'
import Person from "./Person/Person";

class Persons extends Component{
    render (){
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                key={person.id}
                personDeleter = {() => this.props.deletePersonH(index)}
                nameChanger = {(event) => this.props.nameChangerH(event, person.id)}/>});
    }
}


export default Persons