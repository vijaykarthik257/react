import React, {useState} from "react";


const InboxPage = () => {
    const [showHide, setDisplayMode] = useState(true);

    const showImage = () => {
        setDisplayMode(true);

    }

    const hideimage = () => {
        setDisplayMode(false);
        
    }
    return(
        <div>
            <h1>Welcome to Inbox Page</h1>
            <div>
                <button onClick={() => showImage()}>Show Image</button>
                <button onClick={() => hideimage()}>hide Image</button>
            </div>
            <div>
                {
                    showHide&&
                   <img src={require("../images/inbox.jpg")} width="300" alt="banner" /> 
                }
            </div>
        </div>
    )
}

export default InboxPage;