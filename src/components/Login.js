import React, {useState} from 'react'
import '../login.css'

import {useSelector,useDispatch } from 'react-redux';
import {login} from "../actions/index";



function Login() {
    const dispatch=useDispatch();
    const admin=useSelector(state=>state.login.admin);
    const error=useSelector(state=>state.login.error);

        if(admin != ''){
            window.location.href = "/Home";
        }


    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

const LoginFun=(e)=>{
    e.preventDefault();
    dispatch(login(email,password))
}



    return (



        <>
        <form onSubmit={handleSubmit}>
            <h2 className="sr-only">Login Form</h2>
            <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>

            <div className="form-group">
                <input 
                className="form-control"  
                type="email" 
                name="email" 
                placeholder="Email" 
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>

            <div className="form-group">
                <input 
                className="form-control" 
                type="password" 
                name="password" 
                placeholder="Password"  
                onChange={(e)=>setPassword(e.target.value)}
                />

            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit"onClick={(e)=> LoginFun(e)}>Log In</button>
            </div>
            
        </form>
        </>
    )
}
export default Login