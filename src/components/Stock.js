import React, { useEffect, useState } from "react";

function Stock({stock, onBuyStocks}) {
    console.log(stock)
    const [user_id, setUserId] = useState("")

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/user')
        .then(res => res.json())
        .then(user => setUser(user))
    }, [])

    function handleFormSubmit(e) {
        e.preventDefault();

       fetch(`http://localhost:9292/stocks/${stock}`, {
         method: "PATCH",
         headers: {
           "Content-Type": "application/json",
           Accept: 'application/json'
         },
        body: JSON.stringify({
           user_id: user_id
         }),
       })
         .then((r) => r.json())
         .then((stocks) => onBuyStocks(stocks));
     }

    return (
        <div>
            {/* <img src={stock.logo_url} alt={stock.name}/> */}
            <h2>{stock.name}</h2>
            <small>{stock.price}</small>
            <button 
                onClick={setUserId(user.id)}>
                Buy Stock
            </button>
            <hr/>
        </div>
    )
}

export default Stock;