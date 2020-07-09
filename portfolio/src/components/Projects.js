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

//import styling libraries
import Slide from "react-reveal";

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