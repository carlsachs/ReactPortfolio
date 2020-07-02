import React from "react";

//import other files

import "./Nav.css"

const Nav = () => {

    return (
        <div>
            <div id="btn">
                <span class="noselect">Home</span><div id="circle"></div>
            </div>
            <div id="btn2">
                <span class="noselect2">Projects</span><div id="circle2"></div>
            </div>
            <div id="btn3">
                <span class="noselect3">About</span><div id="circle3"></div>
            </div>
        </div>
    )
}

export default Nav;