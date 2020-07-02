import React from "react";

//import styling files
import "../App.css";

//import styling libraries
import Fade from "react-reveal";
import Bounce from "react-reveal/Bounce";
import Typist from "react-typist";


const HomeTop = () => {

    return (
        <Fade top>
        <div className="topdiv">
                    <div className="title">
                        <h1 aria-label="../../Carl/Sachs"></h1>
                    </div>
        </div>
        </Fade>
    )
}

export default HomeTop;