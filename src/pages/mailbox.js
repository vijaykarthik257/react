import React from "react";
import HeaderComponent from "../components/header";
import {NavLink, Outlet} from "react-router-dom";



const MailBoxPage = () => {
    return(
        <div className="main-page">
            <HeaderComponent></HeaderComponent>
            <div className="page-content">
                <h1>Welcome to MailBox</h1>
                <div className="wrap">
                    <div className="title">
                        <NavLink to="/mail/inbox">Inbox</NavLink>
                        <br/> <br/>

                        <NavLink to="/mail/sent">Sent</NavLink>
                        <br/> <br/>

                        <NavLink to="/mail/trash">Trash</NavLink>

                    </div>
                    <div className="info">
                        <Outlet></Outlet>
                    </div>
                </div>               
            </div>
        </div>
    )
}

export default MailBoxPage;