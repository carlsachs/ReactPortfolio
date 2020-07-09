import React from "react";

//import other resources
import { Link } from "react-router-dom";

//import css
import "./FE1.css";

import Insta from "./insta.png";

const FE4 = () => {

    return (
        <div className="cardWrap">
            <div className="card-title">
                <h2>InstaClone</h2>
                <p>A throwback to when I was first learning React.</p>
            </div>
            <div className="card-role">
                <h2>Language:</h2>
                <h2>React</h2>
            </div>
            <div className="image">
                <img src={Insta} alt="image of instaclone dapp" />
            </div>
            <div className="live">
                <Link target="_blank" style={{textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px"}} to="https://github.com/carlsachs/React-Components-Insta-Clone">Github Repo</Link>
            </div>
        </div>
    )
}

export default FE4;