import React from 'react';

const nav = props => {

    return (
        <div>
        <header id="header" className="alt">
            <a href="index.html" className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></a>
            <nav>
            <a href="#menu">Menu</a>
            </nav>
        </header>


        <nav id="menu">
            <ul className="link">
            <li><a href="index.html">Home</a></li>
            <li><a href="landing.html">Landing</a></li>
            <li><a href="generic.html">Generic</a></li>
            <li><a href="elements.html">Elements</a></li>
            </ul>
            <ul className="actions stacked">
            <li><a href="#" className="button primary fit">Get Started</a></li>
            <li><a href="#" className="button fit">Log In</a></li>
            </ul>
        </nav>
      </div>
    );

};

export default nav;