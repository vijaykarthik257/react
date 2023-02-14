import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import {useNavigate} from "react-router-dom";

const SignInPage = () => {

    const navigate = useNavigate();

    const ValidateLogin = () => {
        navigate("/contact");
    }





    return(
        <div className="main-page">
            <HeaderComponent></HeaderComponent>
           <div className="page-content form-align">                
                <h1>Sign In Page</h1>                
                <div className="space">
                    <label className="label">Enter Your Name</label>
                    <input className="textbox" type="text" placeholder="Enter your Name"/>
                 </div>
                 <div className="space">
                    <label className="label">Enter Your Password</label>
                    <input className="textbox" type="password" placeholder="Enter Your Password" />
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