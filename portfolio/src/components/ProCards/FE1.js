import React from "react";

//import other resources
import { Link } from "react-router-dom";

//import css
import "./FE1.css";

import Med from "./medcabinet.png";

const FE1 = () => {

    return (
        <div className="cardWrap">
            <div className="card-title">
                <h2>Med-Cabinet</h2>
            </div>
            <div className="card-role">
                <h2>My Role:</h2>
                <h2>React Developer</h2>
            </div>
            <div className="image">
                <img src={Med} alt="image of medcabinet home" />
            </div>
            <div className="live">
                <Link style={{textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px"}} to="https://med-cabinet-3.now.sh/">Live Demo</Link>
                <Link style={{textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px"}} to="https://med-cabinet-3.now.sh/">Github Repo</Link>

            </div>
        </div>
    )
}

export default FE1;