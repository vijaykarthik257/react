import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";


const SettingPage = () => {
    return(
        <div className="main-page">
            <HeaderComponent></HeaderComponent>
            <div className="page-content">
            <h1>Welcome to SettingPage</h1>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
}

export default SettingPage;