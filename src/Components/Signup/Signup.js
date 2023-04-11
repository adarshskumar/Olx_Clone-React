import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';

export default function Signup() {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { firebase } = useContext(FirebaseContext)

  const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(firebase)
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName : username}).then(()=>{
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          username: username,
          phone: number,
        }).then(()=>{
          navigate("/login")
        })
      })
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='signup'></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            value={number}
            onChange={(e)=>{setNumber(e.target.value)}}
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}
