import React from "react";



const ArrayComponent = () => {

    let name = "vijay"

    const address = {
        street : "kamarajar",
        area : "velankanni",
        city : "nagapattinam"
    };


    const list = ["vijay", "Karthik", "Kumar"]




    return(
        <div>
            <h3>Name : {name}</h3>
            <h3>Street : {address.street} , City ; {address.city}</h3>
            <h3>First Name : {list[0]} , Second Name :{list[1]}</h3>
        </div>
    )
}

export default ArrayComponent;