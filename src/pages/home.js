import React, { useState, useEffect} from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import axios from "axios";

const HomePage = () => {

    useEffect(() => {
        getUserprofile();
    }, []);

    const [userProfiles, updateUserList] = useState([]);

    const getUserprofile = () => {
        const url = "https://reqres.in/api/users?page=2";

        axios.get(url)
            .then((response) =>{
                const userList = response.data.data;
                updateUserList(userList);
             })

            .catch((error) => { 
                console.log(error);
            })
    }




    return(
        <div className="home-page">
            <HeaderComponent></HeaderComponent>
            <div className="page-content">
                {/* <h1>{{response}}</h1> */}
                <h1>Welcome to Home Page</h1>
                <button onClick={() => getUserprofile()}>LoadUserProfile</button>

                <table className="customers">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email ID</th>
                            <th>Profile Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userProfiles.map((value, index) => {
                                return(
                                   <tr>
                                        <td>{value.id}</td>
                                        <td>{value.first_name}</td>
                                        <td>{value.last_name}</td>
                                        <td>{value.email}</td>
                                        <td>
                                            <img src={value.avatar} alt="user-profile" className="profile_pic"/>
                                        </td>
                                   </tr>
                                )
                            })
                        }
                        {
                            userProfiles.length === 0 &&
                            <tr>
                                <td colSpan={5}>No Records Found</td>
                            </tr>
                        }
                    </tbody>
    
                </table>

            </div>
            <div className="ft-cmt">
                <FooterComponent></FooterComponent>
            </div>
            {/* <FooterComponent></FooterComponent> */}
        </div>
    )
}




export default HomePage;