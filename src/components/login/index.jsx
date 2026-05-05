import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Login =()=>{
     const navigate=useNavigate();

     useEffect(()=>{
      
       const token= Cookies.get("myToken");

       if(token !==undefined){
         
          navigate("/");
       }
     });


    const[allValues,setValues]=useState({
        username:"",
        password:"",
        errorMsg:""
    });

   

 const onSubmitData= async (event)=>{

    event.preventDefault();

    const api="https://apis.ccbp.in/login";

    const userDetails={
          username:allValues.username,
          password:allValues.password
    }

    const options={
          method:"Post",
          body:JSON.stringify(userDetails)
    }

    try{
          const response=await fetch(api,options);

          const data= await response.json();

          if(response.ok){
            setValues({...allValues,errorMsg:""});
            
            Cookies.set("myToken",data.jwt_token);

            // console.log(data.jwt_token);

            navigate("/");
            
          }else{
             setValues({...allValues,errorMsg:data.error_msg});
          }

          

    }catch(error){
        console.log(error);
    }
 }

    return (

<div className="login-cont" >
    <h1 className="text-primary">Login</h1>
    <form className="w-40 form h-50 p-4 rounded-large shadow"  onSubmit={onSubmitData}>
    <div className="form-group">
    <label htmlFor="Username">Username</label>
    <input onChange={(e)=>{setValues({...allValues,username:e.target.value})}} type="text" className="form-control" id="Username" placeholder="rahul"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
    </div>
    <br></br>
    <div className="form-group">
    <label htmlFor="Password">Password</label> 
    <input onChange={(e)=>{setValues({...allValues,password:e.target.value})}} type="password" className="form-control" id="Password" placeholder="rahul@2021"/>
    </div>
     <br></br>
    <button type="submit" className=" btn btn-primary ">Login</button>
    <br/>

    <b className="text-danger">{allValues.errorMsg}</b>
    </form>
</div>
    )
    
}

export default Login;