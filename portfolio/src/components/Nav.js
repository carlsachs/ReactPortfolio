import React from "react";
import { useHistory } from "react-router-dom";

//import other files

import "./Nav.css"

const Nav = () => {

    let history = useHistory();

    const toHome = () => {
        history.push("/");
    }

    const toProjects = () => {
        history.push("/projects");
    }

    const toAbout = () => {
        history.push("/about");
    }

    return (
        <div style={{display: "flex", justifyContent: "space evenly"}}>
            <div id="btn" onClick={toHome}>
                <span class="noselect">Home</span><div id="circle"></div>
            </div>
            <div id="btn2" onClick={toProjects}>
                <span class="noselect2">Projects</span><div id="circle2"></div>
            </div>
            <div id="btn3" onClick={toAbout}>
                <span class="noselect3">About</span><div id="circle3"></div>
            </div>
            <div id="btn4" onClick={toAbout}>
                <span class="noselect4">Contact</span><div id="circle4"></div>
            </div>
        </div>
    )
}

export default Nav;