import React, {useState} from 'react';
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { FaEyeSlash, FaEye } from "react-icons/fa";
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {

  const [visibility, controlVisibility] = useState(true);

  const [loginForm, extractLoginForm] = useState({
    email : "",
    password : ""
  });

  const [invalidCrediential, checkCredentials] = useState(false);

  const [loader, checkLoader] = useState(false);

  const navigate = useNavigate();

  

    const viewPassword = () => {
      controlVisibility (false);

    }

    const hidePassword = () => {
      controlVisibility (true);
   }

    const handleInput = (event) => {
      extractLoginForm({...loginForm, [event.target.name] : event.target.value});
    }

    const submitLoginForm = () => {
      checkLoader(true);
      const url = "https://reqres.in/api/login";

      axios.post(url, loginForm)
        .then((response) => {
          console.log(response);
          checkCredentials(false);
          checkLoader(false);
          navigate("/");

        })
        .catch((error) => {
          console.log(error);
          checkCredentials(true);
          checkLoader(false);
        })
  }
  return (

    <div className="main-page">
      <HeaderComponent></HeaderComponent>
      <div className="page-content">
       <div className='style-form'>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleInput} name="email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>

        <Form.Control type={visibility ? "password" : "text"} placeholder="Password" className="password-field" onChange={handleInput} name="password" />

        { visibility ? <FaEyeSlash size={"34px"} className="icon" onClick={() => viewPassword()} /> : <FaEye size={"34px"} className="icon" onClick={() => hidePassword()} /> }


        {
          invalidCrediential && <Form.Text className="red-text">
          The Email or Password entered is Wrong!
          </Form.Text>
         } 
           
      </Form.Group>

      
      
      <Button variant="primary" onClick={() => submitLoginForm() }>
        Submit
        
        {loader && <Spinner animation="border" role="status"  className="loader">
          <span className="visually-hidden">Loading...</span>
        </Spinner>}


      </Button>
    </Form>
       </div>
      </div>
      
      <FooterComponent></FooterComponent>
      </div>
  )
}

export default LoginPage;