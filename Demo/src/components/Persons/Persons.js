import React, {PureComponent} from 'react'
import Person from "./Person/Person";
import PropTypes from "prop-types";

class Persons extends PureComponent{
    constructor(props){
        super(props);
        console.log("[Persons.js] constructor");
    }

    componentWillMount(){
        console.log("[Persons.js] componentWillMount()")
    }

    componentDidMount(){
        console.log("[Persons.js] componentDidMount()")
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("[Persons.js] shouldComponentUpdate()")
    //     return nextProps.persons !== this.props.persons
    //         || nextProps.nameChangerH !== this.props.nameChangerH
    //         || nextProps.deletePersonH !== this.props.deletePersonH;
    // }

    render (){
        console.log("[Persons.js] render()")
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                key={person.id}
                personDeleter = {() => this.props.deletePersonH(index)}
                nameChanger = {(event) => this.props.nameChangerH(event, person.id)}/>});
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    deletePersonH: PropTypes.func,
    nameChangerH: PropTypes.func
}

export default Persons