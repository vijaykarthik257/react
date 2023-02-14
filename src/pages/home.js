import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const HomePage = () => {
    var response;
    const data = async () =>{
         response =  await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-01-14&sortBy=publishedAt&apiKey=e9cb0b1dd6aa46feb86017004dc6fdfe',);
      }
      data();
    return(
        <div className="main-page">
            <HeaderComponent></HeaderComponent>
            <div className="page-content">
                <h1>{{response}}</h1>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
}




export default HomePage;