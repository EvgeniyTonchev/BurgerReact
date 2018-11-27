import React from "react";

const person = (params) => {
    return (
        <div className="Person">
            <p onClick={params.personDeleter}>I'm {params.name} and I'm {params.age} years old !</p>
            <p>{params.children}</p>
            <input type="text" onChange={params.nameChanger} value={params.name}/>
        </div>
    )
}

export default person;