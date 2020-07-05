import React from "react";

//import other files
import "./UnderTop.css";

//import other styling libraries
import Fade from "react-reveal";

const UnderTop = () => {

    return (
        <div className="wrap">
            <Fade top>
                <h1>Skills</h1>
            </Fade>
            <div className="boxes">
                <Fade left>
                    <div className="box1">
                        <h2>Front-End</h2>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="box2">
                        <h2>Back-End</h2>
                    </div>
                </Fade>
                <Fade right>
                    <div className="box3">
                        <h2>Computer Science</h2>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default UnderTop;