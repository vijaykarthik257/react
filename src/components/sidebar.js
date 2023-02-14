import React from "react";



const SidebarComponent = () => {


    const eligileVote = () => {
        let age = prompt("Enter the age");
        if (age>=18){
            alert("Eligible to vote");
        }
        else{
            alert("Not Eligible to Vote");
        }
    };

    return(
        <div>
            <button onClick={() => eligileVote()}>check</button>
            <h1 className="sidebar">Side Bar of this Page</h1>
            
        </div>
    )
} 

export default SidebarComponent;