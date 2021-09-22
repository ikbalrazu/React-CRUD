import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddUser = () =>{

    let history=useHistory();

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    })
    
    const {name,username,email,phone,website}=user;

    const OnInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value})
    };

    const onSubmit = async e=>{
        e.preventDefault();
        await axios.post("http://localhost:3003/users",user)
        history.push("/")
    };

    return(
        <div className="container">
            <h1>This is user page</h1>
        <form onSubmit={e => onSubmit(e)}>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Enter Name</label>
            <input type="text" name="name" class="form-control" value={name} onChange={e => OnInputChange(e)} />
            
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Enter Username</label>
            <input type="text" name="username" class="form-control" value={username} onChange={e => OnInputChange(e)}/>
            
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Enter Email</label>
            <input type="email" name="email" class="form-control" value={email} onChange={e => OnInputChange(e)}/>
            
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Enter Phone Number</label>
            <input type="text" name="phone" class="form-control" value={phone} onChange={e => OnInputChange(e)} />
            
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Enter Website Name</label>
            <input type="text" name="website" class="form-control" value={website} onChange={e => OnInputChange(e)} />
            
        </div>
        <button type="submit" class="btn btn-primary">Add User</button>
        </form>
        </div>
    );
};
export default AddUser;