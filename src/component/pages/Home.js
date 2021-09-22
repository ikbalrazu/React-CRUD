import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


const Home=()=>{
    const [users,setUser] = useState([]);

    useEffect(() => {

        LoadUser();

        console.log("ki khovor vala ni")

    },[]);

    const LoadUser= async ()=>{
         const result= await axios.get("http://localhost:3003/users")
         console.log(result.data);
         setUser(result.data.reverse());
         
    }
    return(
            <div className="container">
            <h1>Home page</h1>
            <table class="table caption-top">
    <caption>List of users</caption>
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {users.map((user,index) => (
            <tr>
            <th>{index + 1}</th>
            <th>{user.name}</th>
            <th>{user.username}</th>
            <th>{user.email}</th>
            <th>
            <Link type="button" class="btn btn-primary mr-2">View</Link>
            <Link type="button" class="btn btn-light mr-2" to={'/edituser/${user.id}'}>Edit</Link>
            <Link type="button" class="btn btn-danger">Delete</Link>
            </th>
            </tr>
        ))}
    </tbody>
    </table>
    </div>
    )
}
export default Home;