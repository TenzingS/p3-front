import React from "react";
import Stock from "./Stock";
import NewStock from "./NewStock";

function StockList({user, stocks, handleAddStock, handleBuyStock, handleFunds, handleRandomStock}) {

    return(
        <div className="stocklist">
            <h1 className ='buyingpower'>Buying Power: ${user.funds}</h1>
            <div className = 'stocksdiv'>
                <NewStock addStock = {handleAddStock}/>
                <div className = "allstocks">
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
                </div>
            </div>
        </div>
    )
}

export default StockList;