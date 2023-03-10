import React from "react";
import {NavLink} from "react-router-dom";


const HeaderComponent = () => {
    return(
        <div className="header">
            <div className="logo">
                <img src={require("../images/logo.png")} alt="nice" className="img-logo"/>
                {/* <img src={require("../images/vk.png")} className="logo" /> */}
           </div>
           <div className="content">
                <NavLink to="/" className={({isActive}) => isActive? "link active-link" : "link"}>Home</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive? "link active-link" :"link"}>Contact</NavLink>
                <NavLink to="/setting" className={({isActive}) => isActive? "link active-link" : "link" }>Setting</NavLink>
                <NavLink to="/signin" className={({isActive}) => isActive? "link active-link" : "link"}>SignIn</NavLink>
                <NavLink to="/mail" className={({isActive}) => isActive? "link active-link" : "link"}>Mail</NavLink>
                <NavLink to="/login" className={({isActive}) => isActive? "link active-link" : "link"}>Login</NavLink>
           </div>

        </div>
    )
}


export default HeaderComponent;