import React, { useState } from "react";


const UserForm = () => {
    // const[username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    const initialState = {
        username: "",
        email: "",
        password: ""
    }
    
    const[formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target;
        // console.log(e.target.name);
        // console.log(e.target.value);
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    // const handleUsernameChange = (e) => {
    //    setUsername(e.target.value);
    //     // console.log(e.target.value)
    // }
    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value)
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        const {username, email, password} = formData;
        alert(`Create user, ${username} with email ${email} & ${password}`)
        setFormData(initialState)
    }

    return ( 
    <form onSubmit={handleSubmit}>
    <label htmlFor="username">Username</label>
        <input
        id="username"
        type="text"
        name="username"
        placeholder="username"
        value={formData.username} 
        onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
        type="email" 
        name="email"
        placeholder="email" 
        id="email" 
        value={formData.email} 
        onChange={handleChange}/>
     

        <label htmlFor="password">Password</label>
        <input
        type="password" 
        name="password"
        placeholder="password" 
        id="email" 
        value={formData.password} 
        onChange={handleChange}/>
        <button  > Add Me to list! </button>
    </form >
    )
}


export default UserForm;