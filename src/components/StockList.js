import React from "react";
import Stock from "./Stock";
import NewStock from "./NewStock";

function StockList({user, stocks, handleAddStock, handleBuyStock, handleFunds, handleRandomStock}) {

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
                        onHandleFunds = {handleFunds}
                        handleRandomStock = {handleRandomStock}
                    />
                ))}
            </ul>
        </div>
    )
}

export default StockList;