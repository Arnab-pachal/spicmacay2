import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const style = {
    marginTop: "10px",
    backgroundColor: "red",
    opacity: 1,
    borderRadius: "20px",
    color: "white",
    padding: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    width: "100px",
    height: "40px",
    textAlign: "center",
    marginLeft :'20px',
  };

  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setInput(e.target.value);
  };
  async function setItemWithExpiry(key, value, ttl) {
    const now = new Date();

    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    };

    localStorage.setItem(key, JSON.stringify(item));
}
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Submit button clicked");
    console.log(input);
        const response = await fetch("https://spicmacayback.onrender.com/check",{
        method:'POST',
        headers:{
        'Content-type':'application/json',},
        body:JSON.stringify({"key":input}),
            })
   localStorage.removeItem('s-id');
    let res = await response.json();
    if(response.ok){
    await setItemWithExpiry('s-id',res.code,60*60*1000);
    alert("You are Logged in ");navigate("/");}
    else{alert("This is Invalid username.Please Try Again");}
  };
   return(<>
    <div style={{display:'flex',justifyContent:'center',alignItem :'center'}}>
      <form onSubmit={handleSubmit} style={{marginBottom : '400px',marginTop:'80px'}}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Type Username"
          value={input}
        />
        <button type="submit" style={style}>
          Submit
        </button>
      </form>
    </div>
  </>)
   
};

export default Login;
