import React from "react";

//import other resources
import { Link } from "react-router-dom";

//import css
import "./FE1.css";

import code from "./db2.png";

const BE2 = () => {

    return (
        <div className="cardWrap">
            <div className="card-title">
                <h2>Database: To-Do</h2>
                <p>First sprint challenge code in backend.</p>
            </div>
            <div className="card-role">
                <h2>Language:</h2>
                <h2>Node.js/knex</h2>
            </div>
            <div className="image">
                <img src={code} alt="image of code for database 2" />
            </div>
            <div className="live">
                <Link target="_blank" style={{textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px"}} to="https://github.com/carlsachs/node-db-challenge">Github Repo</Link>
            </div>
        </div>
    )
}

export default BE2;