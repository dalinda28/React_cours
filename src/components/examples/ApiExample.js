import React, { useEffect } from 'react'
import { useState } from "react";

function ApiExample() {

    const [items] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <h5>Api Exemple</h5>
            {items.map((item) => (
                <p>{item.name}</p>
            ))}
        </div>
    )
}

export default ApiExample