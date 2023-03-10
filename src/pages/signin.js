import React, {useState} from "react";


import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
// import {useNavigate} from "react-router-dom";


const SignInPage = () => {

    const [loginForm, loginFunction] = useState( {
        username : "",
        password : ""
    });

    // const navigate = useNavigate();

    const ValidateLogin = () => {
        // navigate("/contact");

        console.log(loginForm);
    }

    const handleInputField = (event) => {
        console.log(event.target.name, event.target.value);


        loginFunction({...loginForm, [event.target.name] : event.target.value});
    }


   



    return(
        <div className="main-page">
            <HeaderComponent></HeaderComponent>
           <div className="page-content form-align">                
                <h1>Sign In Page</h1>                
                <div className="space">
                    <label className="label">Enter Your Name</label>
                    <input className="textbox" type="text" placeholder="Enter your Name" onChange={handleInputField} name="username"/>
                 </div>
                 <div className="space">
                    <label className="label">Enter Your Password</label>
                    <input className="textbox" type="password" placeholder="Enter Your Password" onChange={handleInputField} name="password" />
                 </div>
                 <div>
                    <button className="button" onClick={() => ValidateLogin()}>SignIN</button>
                 </div>

           </div>
           <FooterComponent></FooterComponent>
        </div>
    )
}


export default SignInPage;