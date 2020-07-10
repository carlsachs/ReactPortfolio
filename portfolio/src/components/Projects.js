import React from "react";

//import css
import "./Projects.css";

//import other resources
import { Link } from "react-router-dom";

//import other components
import Nav from "./Nav";
import FE1 from "./ProCards/FE1";
import FE2 from "./ProCards/FE2";
import FE3 from "./ProCards/FE3";
import FE4 from "./ProCards/FE4";
import FE5 from "./ProCards/FE5";
import BE1 from "./ProCards/BE1";
import BE2 from "./ProCards/BE2";
import BE3 from "./ProCards/BE3";
import BE4 from "./ProCards/BE4";
import svg from "./project.svg";

//import styling libraries
import { Slide, Fade, Flip } from "react-reveal";

const Projects = () => {

    return (
        <div className="wrap">
            <Nav />
            <div className="top-proj">
                <div className="top-left">
                <Fade top>
                    <h2>Featured Projects</h2>
                </Fade>
                <Fade bottom>
                    <div className="repo">
                        <h3>Find all my repos <Link target="_blank"style={{textDecoration: "none", color: "white"}} to="https://github.com/carlsachs/repositories">here</Link></h3>
                    </div>
                    <div className="repo1">
                        <h3>Compiled list of my skills <Link style={{textDecoration: "none", color: "white"}} to="/skills">here</Link></h3>
                    </div>
                </Fade>
                <Flip top duration={2000}>
                    <div className="front-mid">
                        <a target="_blank" href="https://github.com/carlsachs">Follow me on Github</a>
                    </div>
                </Flip>
                </div>
                <div className="top-right">
                    <img src={svg} alt="svg of projects" />
                </div>
            </div>
            <div className="front-end">
                <div className="front-top">
                    <h2 style={{marginTop: "2%", textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px", width: "20%", margin: "0 auto", textAlign: "center"}}>Front-End</h2>
                </div>
                <div className="front-bottom">
                    <Slide left>
                        <FE2 />
                    </Slide>
                    <Slide right>
                        <FE3 />
                    </Slide>
                    <Slide left>
                        <FE1 />
                    </Slide>
                    <Slide right>
                        <FE4 />
                    </Slide>
                    <Slide left>
                        <FE5 />
                    </Slide>
                </div>
            </div>
            <div className="back-end">
                <div className="back-top">
                    <h2 style={{marginTop: "2%", textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px", width: "20%", margin: "0 auto"}}>Back-End</h2>
                </div>
                <div className="front-bottom">
                    <Slide left>
                        <BE1 />
                    </Slide>
                    <Slide right>
                        <BE2 />
                    </Slide>
                    <Slide left>
                        <BE3 />
                    </Slide>
                    <Slide right>
                        <BE4 />
                    </Slide>
                </div>
            </div>
            <div className="CS">
                <div className="CS-top">
                    <h2 style={{marginTop: "2%", textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px", width: "20%", margin: "0 auto"}}>Computer Science</h2>
                </div>
                <div className="CS-bottom">
                    <Slide left>
                        <FE2 />
                    </Slide>
                    <Slide right>
                        <FE3 />
                    </Slide>
                    <Slide left>
                        <FE1 />
                    </Slide>
                    <Slide right>
                        <FE4 />
                    </Slide>
                    <Slide left>
                        <FE5 />
                    </Slide>
                </div>
            </div>
        </div>
    )
}
export default Projects;