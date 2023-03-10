import React, { useState } from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";


const SettingPage = () => {

    const [registerForm, updateRegister] = useState({
        name : "",
        email_id : "",
        password : "",
        re_password : "",
        gender : "",
        date_of_birth : "",
        hobbies : [],
        education : "",
        location : "",
        address : ""
    });

    const handleFormfield = (event) => {
        if(event.target.name === "hobbies"){
            if(event.target.checked){
                registerForm.hobbies.push(event.target.value);
            }
            else{
                const index = registerForm.hobbies.indexOf(event.target.value);
                registerForm.hobbies.splice(index,1)
            }
            updateRegister({...registerForm,hobbies:registerForm.hobbies});
        }
        else{     
        updateRegister({...registerForm ,[event.target.name]: event.target.value})
        }    
    }

    const submitRegisterForm = () => {
        console.log(registerForm);
    }
    return(
        <div className="home-page">
            <HeaderComponent></HeaderComponent>
            <div className="page-content">
                <h1>Form Submission</h1>
                <div className="form-account">
                    <div className="section">
                        <label className="form-label">Enter Your Name : </label>
                        <input className="form-input" type="text" placeholder="Enter your name" onChange={handleFormfield} name="name"/>
                    </div>
                    <div className="section">
                        <label className="form-label">Enter Your Email : </label>
                        <input className="form-input" type="email" placeholder="Enter your email" onChange={handleFormfield} name="email_id"/>
                    </div>
                    <div className="section">
                        <label className="form-label">Enter Your Password : </label>
                        <input className="form-input" type="password" placeholder="Enter your password" onChange={handleFormfield} name="password"/>
                    </div>
                    <div className="section">
                        <label className="form-label">Re-Enter Your Password : </label>
                        <input className="form-input" type="password" placeholder="Confirm password" onChange={handleFormfield} name="re_password"/>
                    </div>
                    <div className="section">
                        <label className="form-label">Select Your Gender : </label>
                        <input type="radio" onChange={handleFormfield} name="gender" value="Male"/><label>Male</label>
                        <input type="radio" onChange={handleFormfield} name="gender" value="Female"/><label>Female</label>
                        <input type="radio" onChange={handleFormfield} name="gender" value="Others"/><label>Others</label>
                    </div>
                    <div className="section">
                        <label className="form-label">Select Your DOB : </label>
                        <input type="date" onChange={handleFormfield} name="date_of_birth"/>
                    </div>
                    <div className="section">
                        <label className="form-label">Select Your Hobbies : </label>
                        <input type="checkbox" onChange={handleFormfield} name="hobbies" value="Criket"/><label>Cricket</label>
                        <input type="checkbox" onChange={handleFormfield} name="hobbies" value="Football"/><label>Footbal</label>
                        <input type="checkbox" onChange={handleFormfield} name="hobbies" value="Hockey"/><label>Hockey</label>
                        <input type="checkbox" onChange={handleFormfield} name="hobbies" value="Chess"/><label>Chess</label>
                        <input type="checkbox" onChange={handleFormfield} name="hobbies" value="BasketBall"/><label>BasketBall</label>
                    </div>
                    <div className="section">
                        <label className="form-label">Select Your Education : </label>
                        <select onChange={handleFormfield} name="education" defaultValue={""}>
                            <option value="" disabled>Please Choose Any value</option>
                            <option>SSLC</option>
                            <option>HSC</option>
                            <option>Under Graduate</option>
                            <option>Post Graduate</option>
                            <option>Master Degeree</option>
                            <option>M.Phil</option>
                        </select>
                    </div>
                    <div className="section">
                        <label className="form-label">Select Your Location : </label>
                        <select onChange={handleFormfield} name="location" defaultValue={""}>
                            <option value="" disabled>Choose Your Location</option>
                            <option>Chennai</option>
                            <option>Nagapattinam</option>
                            <option>Coiambatore</option>
                            <option>Thiruvarur</option>
                            <option>Thanjavur</option>
                            <option>Trichy</option>
                        </select>
                    </div>
                    <div className="add-section">
                        <label className="form-label">Enter Your Adderess : </label>
                        <textarea className="form-input" placeholder="Address" onChange={handleFormfield} name="address"></textarea>
                    </div>
                    <div>
                        <button onClick={() => submitRegisterForm()}>Submit Form</button>
                    </div>                     
                </div>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
}

export default SettingPage;