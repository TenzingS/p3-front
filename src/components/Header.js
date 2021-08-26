import React from 'react';
import { NavLink } from "react-router-dom"

function Header() {
    return(
        <div className ='header'>
            <h4 className = "title"> Flatiron Stock Exchange</h4>
            <nav className = "tabs">
                <ul className = "nav">
                    <li className = 'links'><NavLink exact to="/">Home</NavLink></li>
                    <li className = 'links'><NavLink to="/stocks">Stocks</NavLink></li>
                    <li className = 'links'><NavLink to="/user">Portfolio</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header