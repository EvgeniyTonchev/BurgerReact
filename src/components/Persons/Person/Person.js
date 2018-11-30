import React, {Component} from "react";
//import Radium from 'radium'
import personClasses from "./Person.css"

class Person extends Component{
    render (){
        return <div className={personClasses.Person}>
            <p onClick={this.props.personDeleter}>I'm {this.props.name} and I'm {this.props.age} years old !</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.nameChanger} value={this.props.name}/>
        </div>
    }
}

//export default Radium(person);
export default Person;