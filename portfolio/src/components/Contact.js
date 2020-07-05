import React from "react";

//import CSS
import "./Contact.css";

//import other components
import Nav from "./Nav";

//import libraries
import Typist from "react-typist";

const Contact = () => {

    return (
        <div className="wrap">
            <Nav />
            <div className="top">
                <Typist avgTypingSpeed={60} cursor={{ hideWhenDone: true }}>
                    <h2>Get in Touch with Me</h2>
                </Typist>
            </div>
        </div>
    )
}

export default Contact;