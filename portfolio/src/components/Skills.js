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
                <div className="code">
                    <h2>React.js</h2>
                    <h2>HTML</h2>
                    <h2>CSS</h2>
                    <h2>Node.js</h2>
                    <h2>GitFlow</h2>
                    <h2>Slack</h2>
                    <h2>React Redux</h2>
                    <h2>TypeScript</h2>
                    <h2>webkitUI</h2>
                    <h2>Express</h2>
                    <h2>Heroku/Vercel</h2>
                    <h2>Python</h2>
                    <h2>React-Router-Dom</h2>
                </div>
            </div>
        </div>
    )
}

export default Skills;