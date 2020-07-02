import React from "react";

//import styling files
import "../App.css";
import Nav from "./Nav";

//import styling libraries
import Fade from "react-reveal";
import Bounce from "react-reveal/Bounce";
import Typist from "react-typist";


const HomeTop = () => {

    return (
        <div className="topdiv">
            <Nav />
            <div className="title">
                <h1 carl-label="../Carl/Sachs"></h1>
            </div>
        </div>
    )
}

export default HomeTop;