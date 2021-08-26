import React, { useState } from "react";

function NewStock({addStock}) {
    const [name, setStock] = useState("");
    const [logo_url, setLogoURL] = useState("")
    const [price, setPrice] = useState("")

    function handleSubmit(event) {       
        event.preventDefault();
    
        fetch("http://localhost:9292/stocks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            price: price,
            logo_url: logo_url,
          }),
        })
          .then((resp) => resp.json())
          .then((newStock) => {
            addStock(newStock);
            setStock("");
            setLogoURL('')
            setPrice('')
          });
          
      }

      
    return(
      <div className = 'newstock'>
         <h2 className = 'addnewstock'>New Stock IPO:</h2>
         <form className="newstock" onSubmit={handleSubmit}>
            <label className="labeladdname">
                Name:
                <input
                    className ='addstockname' 
                    type="text" 
                    name="name" 
                    value = {name} 
                    onChange={(e) => setStock(e.target.value)} />
            </label>
            <br/>
            <label className="labeladdimage">
                Image URL:
                <input 
                    className = 'addlogo'
                    type="text" 
                    name="logo_url" 
                    value = {logo_url} 
                    onChange={(e) => setLogoURL(e.target.value)} />
            </label>
            <br/>
            <label className="labeladdprice">
                Price:
                <input 
                    className = 'addprice'
                    type="text" 
                    name="price" 
                    value = {price} 
                    onChange={(e) => setPrice(e.target.value)} />
            </label>
            <button className = 'addbutton' type="submit">Launch</button>
            <hr/>
        </form>
      </div>
    )
}

export default NewStock