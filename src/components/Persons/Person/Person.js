import React, {Component} from "react";
//import Radium from 'radium'
import personClasses from "./Person.css"

class Person extends Component{
    constructor(props){
        super(props);
        console.log("[Person.js] constructor");
    }

    componentWillMount(){
        console.log("[Person.js] componentWillMount()")
    }

    componentDidMount(){
        console.log("[Person.js] componentDidMount()")
    }

    render (){
        console.log("[Person.js] render()")
        return <div className={personClasses.Person}>
            <p onClick={this.props.personDeleter}>I'm {this.props.name} and I'm {this.props.age} years old !</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.nameChanger} value={this.props.name}/>
        </div>
    }
}

//export default Radium(person);
export default Person;