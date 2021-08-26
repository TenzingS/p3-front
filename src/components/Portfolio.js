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
        <div className ='portfolio'>
            <h1 className= 'username'>{user.name}</h1>
            <h1 className = 'debt'> {debt()}</h1>
            <h1 className='buyingpower'>Buying Power: ${user.funds}</h1>
            <form className="addfunds" onSubmit={handleSubmitEvent}>Add Funds:
                <label className = 'funds'>
                    <input 
                        type="text" 
                        name="funds" 
                        value = {funds} 
                        onChange={(e) => setFunds(e.target.value)} />
                </label>
                <button className = 'button' type="submit">Deposit</button>
            </form>
            <hr/>
            <ul className = 'stockul'>
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