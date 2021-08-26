import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from './Home';
import StockList from './StockList';
import Portfolio from './Portfolio';

function Main() {
    const [stocks, setStocks] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/stocks')
        .then(res => res.json())
        .then(stocks => setStocks(stocks))
    }, [])

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/user')
        .then(res => res.json())
        .then(user => setUser(user))
    }, [])

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         fetch(`http://localhost:9292/stocks`, {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Accept: 'application/json'
    //              },
    //             body: JSON.stringify({ 
    //             }),
    //             })
    //             .then((r) => r.json())
    //             .then((stock) => setStocks(stock));
    //     }, 100);
    //     return () => clearInterval(interval);
    // }, [])
    
    function handleAddStock(newStock) {
        setStocks([...stocks, newStock]);
      }

    function handleBuyStock(purchasedStock) {
        const boughtStocks = stocks.map((stock) => {
            if(stock.id === purchasedStock.id) {
                return purchasedStock;
            }
            else {
                return stock;
            }
        })
        setStocks(boughtStocks)
    }

    function handleRandomStock(randomStock) {
        const boughtStocks = stocks.map((stock) => {
            if(stock.id === randomStock.id) {
                return randomStock;
            }
            else {
                return stock;
            }
        })
        setStocks(boughtStocks)
    }

    function handleFunds(thefunds) {
        setUser(thefunds)
    }

    const yourStocks = stocks.filter((stock) => {
        if(stock.user_id === user.id) {
            return stock;
        }
    })

    return (
        <div>
            <Switch>
                <Route exact path = "/">
                    <Home/>
                </Route>

                <Route path = "/stocks">
                    <StockList 
                        user = {user} 
                        stocks = {stocks}
                        handleAddStock = {handleAddStock}
                        handleBuyStock = {handleBuyStock}
                        handleFunds = {handleFunds}
                        handleRandomStock = {handleRandomStock}/>
                </Route>
                
                <Route path = "/user">
                    <Portfolio 
                        user = {user} 
                        stocks = {yourStocks}
                        handleBuyStock = {handleBuyStock}
                        handleFunds = {handleFunds}/>
                </Route>
            </Switch>            
        </div>
    )
}

export default Main