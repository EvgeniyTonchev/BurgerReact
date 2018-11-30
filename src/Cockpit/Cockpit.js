import React from 'react'
import classes from "./Cockpit.css"

const cockpit = (props) => {

    let divClasses = [];
    let buttonClass = '';

    if(props.showPersons){
        buttonClass = classes.Red;
    }

    if (props.persons.length <= 2){
        divClasses.push(classes.red);
    }
    if (props.persons.length <= 1){
        divClasses.push(classes.bold);
    }

    let classesString = divClasses.join(' ');

    return (
        <div className={classes.Cockpit}>
        <h1 className={classesString}>Hi, I am test {props.title}.</h1>
                  <button className={buttonClass} onClick={props.togglePersonsHandler}>Toggle Persons</button>
        </div>
    );
}

export default cockpit