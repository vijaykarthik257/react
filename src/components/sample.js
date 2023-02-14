import React from "react";

const SampleComponent = () => {
    let username = "vijay";

    let address = {
        street : "kamarajar",
        area : "velankanni",
        city : "nagapattinam"
    };

    

    const onLogout = () => {
        alert("You Logout Successfully");
    }
    return(
        <div>
            <h2>Welcome back to, {username}</h2>
            <h3>Location :{address.area} , {address.city}</h3>
            <button onClick={() => onLogout()}>Logout</button>
            <h1 className="header">Header of this Page</h1>
        </div>
    )
}

export default SampleComponent;