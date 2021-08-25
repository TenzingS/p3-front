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
         <form className="new-stock" onSubmit={handleSubmit}>Create a new stock:
         <br/>
            <label>
                Name:
                <input 
                    type="text" 
                    name="name" 
                    value = {name} 
                    onChange={(e) => setStock(e.target.value)} />
            </label>
            <br/>
            <label>
                Image URL:
                <input 
                    type="text" 
                    name="logo_url" 
                    value = {logo_url} 
                    onChange={(e) => setLogoURL(e.target.value)} />
            </label>
            <br/>
            <label>
                Price:
                <input 
                    type="text" 
                    name="price" 
                    value = {price} 
                    onChange={(e) => setPrice(e.target.value)} />
            </label>
            <button type="submit">Launch</button>
        </form>

    )
}

export default NewStock