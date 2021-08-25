import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from './Home';
import StockList from './StockList';
import Portfolio from './Portfolio';

function Main() {

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/user')
        .then(res => res.json())
        .then(user => setUser(user))
    }, [])

    return (
        <div>
            <Switch>
                <Route exact path = "/">
                    <Home/>
                </Route>

                <Route path = "/stocks">
                    <StockList user = {user}/>
                </Route>
                
                <Route path = "/user">
                    <Portfolio user = {user}/>
                </Route>
            </Switch>            
        </div>
    )
}

export default Main