import React, { useEffect, useState } from "react";

function Portfolio() {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/user')
        .then(res => res.json())
        .then(user => setUser(user))
    }, [])

    return(
        <div>
            <h2>{user.name}</h2>
            
        </div>
    )
}

export default Portfolio;