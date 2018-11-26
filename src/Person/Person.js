import React from "react";

const person = (params) => {
    return (
        <div>
            <p>I'm {params.name} and I'm {params.age} years old !</p>
            {params.children}
        </div>
    )
}

export default person;