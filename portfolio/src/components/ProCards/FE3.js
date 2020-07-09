import React from "react";

//import other resources
import { Link } from "react-router-dom";

//import css
import "./FE1.css";

import boot from "./bootwork.png";

const FE3 = () => {

    return (
        <div className="cardWrap">
            <div className="card-title">
                <h2>BootWork</h2>
                <p>One of my many half-completed businesses.</p>
            </div>
            <div className="card-role">
                <h2>My Role:</h2>
                <h2>Full-Stack Developer</h2>
            </div>
            <div className="image">
                <img src={boot} alt="image of bootwork dashboard" />
            </div>
            <div className="live">
                <Link target="_blank"style={{textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px"}} to="https://bootwork.app/">Live Demo</Link>
            </div>
        </div>
    )
}

export default FE3;