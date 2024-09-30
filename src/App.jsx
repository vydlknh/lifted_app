import React from 'react';
import Home from './page/Home';
import Signup from './page/Signup';
import Login from './page/Login';
import UserInfo from './page/UserInfo'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'


const App = () => {
  let element = useRoutes([
    {
      path: "/",
      element:<Home/>
    },
    {
      path: "/signup",
      element:<Signup/>
    },
    {
      path: "/login",
      element:<Login/>
    },
    {
      path: "/info",
      element:<UserInfo />
    }
  ])
  return (
    <div className="App">
      <div className="header">
        <Link to="/signup"><button>Sign up</button></Link>
        <Link to="/login"><button>Login</button></Link>
      </div>
      {element}
    </div>
  )
}

export default App;