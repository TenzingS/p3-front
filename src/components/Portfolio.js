import React, { useState } from "react";
import YourStocks from './YourStocks'

function Portfolio({user, stocks, handleBuyStock, handleFunds}) {

    const [funds, setFunds] = useState()
    function handleSubmitEvent(event) {
        event.preventDefault();
        let money = parseInt(funds) + user.funds
        console.log(money)
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
         .then((fund) => {handleFunds(fund); setFunds('')});

    }

    function debt() {
        if (user.funds < 0) {
            return 'Negative Funds'
        }
    }
    
    return(
        <div>
            <h2>{user.name}</h2>
            <h1> {debt()}</h1>
            <h3>Funds: ${user.funds}</h3>
            <form className="add-funds" onSubmit={handleSubmitEvent}>Add Funds:
                <label>
                    <input 
                        type="text" 
                        name="funds" 
                        value = {funds} 
                        onChange={(e) => setFunds(e.target.value)} />
                </label>
                <button type="submit">Deposit</button>
            </form>
            <ul>
                {stocks.map((stock) => (
                    <YourStocks
                        key={Math.random()}
                        stock = {stock}
                        user = {user}
                        onBuyStocks = {handleBuyStock}
                        handleFunds = {handleFunds}
                    />
                ))}
            </ul>
            
        </div>
    )
}

export default Portfolio;