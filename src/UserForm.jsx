import React, { useState } from "react";


const UserForm = () => {
    const[username, setUsername] = useState("FunnyApple");
    const handleChange = (e) => {
       setUsername(e.target.value);
        // console.log(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Create user, ${username}`)
        setUsername("")
    }
    return ( 
    <form onSubmit={handleSubmit}>
        <input type = "text" placeholder = "username" value={username} onChange={handleChange}/>
        <button onClick={handleSubmit} > Add Me to list! </button>
    </form >
    )
}

export default UserForm;