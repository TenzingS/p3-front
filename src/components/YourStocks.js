import React, { useEffect, useState } from "react";

function YourStocks({stock, user, onBuyStocks, handleFunds}) {
  const [user_id, setUserId] = useState()
  const [shares, setShares] = useState(stock.shares - 1)
  const [funds, setFunds] = useState()

  function handleFormSubmit(e) {
      e.preventDefault();

     fetch(`http://localhost:9292/stocks/${stock.id}`, {
       method: "PATCH",
       headers: {
         "Content-Type": "application/json",
         Accept: 'application/json'
       },
      body: JSON.stringify({
         shares: shares,
         user_id: user.id,
         price: stock.price
       }),
     })
       .then((r) => r.json())
       .then((stock) => onBuyStocks(stock));


       let money = user.funds + stock.price
       

       fetch(`http://localhost:9292/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: 'application/json'
        },
       body: JSON.stringify({
          funds: money,
        }),
      })
        .then((r) => r.json())
        .then((fund) => {handleFunds(fund)});



    if (shares === 0) {
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
   }
    }

  return (
      <div>
          <img className="img" src={stock.logo_url} alt={stock.name}/>
          <h2>{stock.name}</h2>
          <small>${stock.price}</small>
          <br/>
          <small>Shares:{stock.shares}</small>
          <button 
              onClick={handleFormSubmit}>
              Sell Stock
          </button>
          <hr/>
      </div>
  )
}

export default YourStocks