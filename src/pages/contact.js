import React,{useState} from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const ContactPage = () => {
    const [contactForm,contactFuction] = useState({
        firstname : "",
        lastname :  "",
        mobile_number : "",
        comment : ""
    });

    const ValidateLogin = () => {
        // navigate("/contact");

        console.log(contactForm);
    }


    const handleInput = (event) => {
        // console.log(event.target.name,event.target.value);



        contactFuction ({...contactForm,[event.target.name]:event.target.value});

    }



    return(
        <div className="main-page">
            <HeaderComponent></HeaderComponent>
            <div className="page-content form-align">
                <h1>Contact Form</h1>
                <div className="space">
                    <label className="contact_label">Enter your FirstName : </label>
                    <input className="contact_textbox" type="text" placeholder="FirstName" onChange={handleInput} name="firstname"/>
                </div>
                <div className="space">
                    <label className="contact_label">Enter Your LastName : </label>
                    <input className="contact_textbox" type="text" placeholder="LastName" onChange={handleInput} name="lastname"/>
                </div>
                <div className="space">
                <label className="contact_label">Enter Your Mobile Number : </label>
                <input className="contact_textbox" type="text" placeholder="Mobile Number" onChange={handleInput} name="mobile_number"/>
           
                </div>
                <div className="space">
                    <label className="contact_label">Enter Your Message : </label>
                    <input className="contact_textbox" type="text" placeholder="comment" onChange={handleInput} name="comment"/>
                   
                </div>

                <button className="cnt_submit" onClick={()=>ValidateLogin()}>Submit</button>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
}

export default ContactPage;