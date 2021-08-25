import React, { useEffect, useState } from "react";
import Stock from "./Stock";
import NewStock from "./NewStock";

function StockList({user}) {
    const [stocks, setStocks] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/stocks')
        .then(res => res.json())
        .then(stocks => setStocks(stocks))
    }, [])

    function handleAddStock(newStock) {
        setStocks([...stocks, newStock]);
      }

    function handleBuyStock(boughtstocks) {
        setStocks(boughtstocks)
    }


    return(
        <div className="list">
            <ul>
                <NewStock addStock = {handleAddStock}/>
                {stocks.map((stock) => (
                    <Stock
                        key={Math.random()}
                        stock = {stock}
                        user = {user}
                        onBuyStocks = {handleBuyStock}
                    />
                ))}
            </ul>
        </div>
    )
}

export default StockList;