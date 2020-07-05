import React from "react";

//Styling
import "./About.css";

//import other components
import Nav from "./Nav";

import "./python.svg"

//import libraries
import Slide from "react-reveal";
import Typist from "react-typist";
import Particles from "react-particles-js";

const About = () => {
    return (
        <div className="wrap">
            <Nav />
            <div className="top">
                <h2>Carl Sachs,<br></br>Web Developer</h2>
            </div>
            <div className="middle">
            <div className="title">
                <Typist avgTypingSpeed={60} cursor={{ hideWhenDone: true }}>
                    <h3 style={{display: "inline-block"}}>Some of my skills:</h3>
                </Typist>
            </div>
            <div className="toprow">
                
            </div>
            </div>
        </div>
    )
}

export default About;