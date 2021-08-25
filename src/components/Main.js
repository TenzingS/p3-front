import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from './Home';
import StockList from './StockList';
import Portfolio from './Portfolio';

function Main() {
    return (
        <div>
            <Switch>
                <Route exact path = "/">
                    <Home/>
                </Route>

                <Route path = "/stocks">
                    <StockList/>
                </Route>
                
                <Route path = "/user">
                    <Portfolio />
                </Route>
            </Switch>            
        </div>
    )
}

export default Main