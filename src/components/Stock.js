import React, { useState, useEffect } from "react";

function Stock({stock, onBuyStocks, user, onHandleFunds, handleRandomStock}) {
    
    const [user_id, setUserId] = useState(user.id)
    const [shares, setShares] = useState(stock.shares + 1)
    let funds = user.funds
    
    useEffect(() => {
      const interval = setInterval(() => {
          fetch(`http://localhost:9292/stocks/${stock.id}`, {
              method: "PATCH",
              headers: {
                  "Content-Type": "application/json",
                  Accept: 'application/json'
               },
              body: JSON.stringify({
                  user_id: stock.user_id,
                  shares: stock.shares,
                  price: Math.floor(Math.random() * 1000) + 1 
              }),
              })
              .then((r) => r.json())
              .then((stockz) => handleRandomStock(stockz));
      }, 5000);
      return () => clearInterval(interval);
  }, [])

    function handleClick(e) {
        e.preventDefault();
        funds = funds - stock.price
        if (funds > 0) {

          fetch(`http://localhost:9292/stocks/${stock.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Accept: 'application/json'
            },
            body: JSON.stringify({
              user_id: user_id,
              shares: shares,
              price: stock.price
            }),
          })
            .then((r) => r.json())
            .then((stock) => onBuyStocks(stock));

            fetch(`http://localhost:9292/users/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Accept: 'application/json'
            },
            body: JSON.stringify({
              funds: funds,
            }),
          })
            .then((r) => r.json())
            .then((fund) => onHandleFunds(fund));
        } }

        function shorting() {
          if (stock.shares>=0) {
            return "Shares:"
          }
          else {
            return "Shares Shorted:"
          }
        }

    return (
        <div className = 'individualstock'>
            <img className="img" src={stock.logo_url} alt={stock.name}/>
            <h2 className = 'stockprice'>${stock.price}</h2>
            <h2 className = 'stockname'>{stock.name}</h2>
            <h4 className ='stockshares'>{shorting()} {stock.shares}</h4>
            <button 
                className = 'buybutton'
                onClick={handleClick}>
                Buy Stock
            </button>
      
        </div>
    )
}

export default Stock;