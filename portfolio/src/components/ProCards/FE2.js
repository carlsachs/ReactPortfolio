import React from "react";

//import other resources
import { Link } from "react-router-dom";

//import css
import "./FE1.css";

import Read from "./readrr.png";

const FE2 = () => {

    return (
        <div className="cardWrap">
            <div className="card-title">
                <h2>Readrr</h2>
                <p>My "thesis" at Lambda.<br></br>A Goodreads alternative</p>
            </div>
            <div className="card-role">
                <h2>My Role:</h2>
                <h2>Front-End Developer</h2>
            </div>
            <div className="image">
                <img src={Read} alt="image of readrr dashboard" />
            </div>
            <div className="live">
                <Link target="_blank"style={{textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px"}} to="https://readrr.app/">Live Demo</Link>
                <Link target="_blank" style={{textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px"}} to="https://github.com/Lambda-School-Labs/betterreads-fe">Github Repo</Link>

            </div>
        </div>
    )
}

export default FE2;