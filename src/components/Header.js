import React from 'react';
import { NavLink } from "react-router-dom"

function Header() {
    return(
        <body>
            <h4 className = "title"> Flatiron Stock Exchange</h4>
            <nav className = "tabs">
                <ul class = "nav">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/stocks">Stocks</NavLink></li>
                    <li><NavLink to="/user">Portfolio</NavLink></li>
                </ul>
            </nav>
        </body>
    )
}

export default Header