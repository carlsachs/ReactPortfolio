import React from "react";

//import other resources
import { Link } from "react-router-dom";

//import css
import "./FE1.css";

import port from "./port.png";

const FE5 = () => {

    return (
        <div className="cardWrap">
            <div className="card-title">
                <h2>Portfolio</h2>
                <p>This very portfolio.</p>
            </div>
            <div className="card-role">
                <h2>Language:</h2>
                <h2>React</h2>
            </div>
            <div className="image">
                <img src={port} alt="image of this very portfolio" />
            </div>
            <div className="live">
                <Link target="_blank" style={{textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px"}} to="https://github.com/carlsachs/ReactPortfolio">Github Repo</Link>
            </div>
        </div>
    )
}

export default FE5;