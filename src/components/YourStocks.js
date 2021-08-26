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
              onClick={handleFormSubmit}>
              Sell Stock
          </button>
          
      </div>
  )
}

export default YourStocks