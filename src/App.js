import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home';
import Login from './Pages/Login'
import Create from './Pages/Create'
import { AuthContext, FirebaseContext } from './store/Context';

function App() {

  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {  
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='signup' element = {<Signup />} />
          <Route path='login' element = {<Login />} />
          <Route path='create' element = {<Create />} />
        </Routes>
          

      
      </BrowserRouter>
      
  );
}

export default App;
