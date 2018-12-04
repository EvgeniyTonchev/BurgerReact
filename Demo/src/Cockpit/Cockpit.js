import React from 'react'
import classes from "./Cockpit.css"
import Aux from "../hoc/AuxFile"

const cockpit = (props) => {

    let divClasses = [];
    let buttonClass = [classes.Button];

    if(props.showPersons){
        buttonClass.push(classes.Red);
    }

    buttonClass = buttonClass.join(' ')

    if (props.persons.length <= 2){
        divClasses.push(classes.red);
    }
    if (props.persons.length <= 1){
        divClasses.push(classes.bold);
    }

    let classesString = divClasses.join(' ');

    return (
        <>
            <h1 className={classesString}>Hi, I am test {props.title}.</h1>
            <button className={buttonClass} onClick={props.togglePersonsHandler}>Toggle Persons</button>
            {/*<button onClick={props.login}>Log In</button>*/}
        </>
    );
}

export default cockpit