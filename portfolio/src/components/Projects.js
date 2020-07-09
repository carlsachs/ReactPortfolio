import React from "react";

//import css
import "./Projects.css";

//import other resources
import { Link } from "react-router-dom";

//import other components
import Nav from "./Nav";
import FE1 from "./ProCards/FE1";

const Projects = () => {

    return (
        <div className="wrap">
            <Nav />
            <div className="top">
                <h2>Featured Projects</h2>
            </div>
            <div className="front-end">
                <div className="front-top">
                    <h2 style={{marginTop: "2%", textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px", width: "20%", margin: "0 auto"}}>Front-End</h2>
                </div>
                <div className="front-mid">
                    <h3>Find my GitHub <Link style={{textDecoration: "none", color: "#1890ff"}} to="https://github.com/carlsachs">HERE</Link>:</h3>
                </div>
                <div className="front-bottom">
                    <FE1 />
                </div>
            </div>
        </div>
    )
}
export default Projects;