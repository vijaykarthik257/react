import React from "react";

const LogIn = () => {
    return(
        <div>
            <form>
                <div>
                <label>Enter Your Name</label>
                <input type="text"/>                
                </div>
                <br></br>
                <div>
                <label>Enter your Password</label>
                <input type="password"/>

                </div>
                <br></br>

                <div>
                    <button>LogIn</button>
                </div>
                
            </form>
        </div>
    )
}

export default LogIn;