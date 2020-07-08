import React from "react";

//import css
import "./Skills.css";

//import other components 
import Nav from "./Nav";

//import styling libraries
import Typist from "react-typist";

const Skills = () => {

    return (
        <div className="wrap">
            <Nav />
            <div className="top">
                <Typist avgTypingSpeed={60} cursor={{ hideWhenDone: true }}>
                    <h2 style={{display: "inline-block"}}>Skills</h2>
                </Typist>
            </div>
            <div className="list">
                
            </div>
        </div>
    )
}

export default Skills;