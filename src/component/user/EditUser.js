import React from 'react';
import { useParams } from 'react-router-dom';


const EditUser = () =>{

    const {id} = useParams();
    alert(id);

    return(

        <div className="container">
            <h1>This is edit user page</h1>
        <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Enter Name</label>
            <input type="text" name="name" class="form-control"/>
            
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Enter Username</label>
            <input type="text" name="username" class="form-control" />
            
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Enter Email</label>
            <input type="email" name="email" class="form-control" />
            
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Enter Phone Number</label>
            <input type="text" name="phone" class="form-control" />
            
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Enter Website Name</label>
            <input type="text" name="website" class="form-control" />
            
        </div>
        <button type="submit" class="btn btn-primary">Edit User</button>
        </form>
        </div>
        
    );
};
export default EditUser;

