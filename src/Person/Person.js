import React from "react";
//import Radium from 'radium'

const person = (params) => {
    // const style = {
    //     '@media (min-width:500px)' : {
    //         width: '450px'
    //     }
    // }

    return (
        //<div className="Person" style={style}>
        <div className="Person">
            <p onClick={params.personDeleter}>I'm {params.name} and I'm {params.age} years old !</p>
            <p>{params.children}</p>
            <input type="text" onChange={params.nameChanger} value={params.name}/>
        </div>
    )
}

//export default Radium(person);
export default person;