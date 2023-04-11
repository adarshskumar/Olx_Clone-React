import React, { useState,useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {

  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate()
  const handleLogin = (e)=>{ 
    e.preventDefault()
    // console.log(email)
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      navigate('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
