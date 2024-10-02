import React from 'react';
import Home from './page/Home';
import Signup from './page/Signup';
import Login from './page/Login';
import UserInfo from './page/UserInfo'
import Dashboard  from './page/Dashboard';
import { useRoutes } from 'react-router-dom'
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
    },
    {
      path: "/dashboard",
      element:<Dashboard />
    },
  ])
  return (
    <div className="App">
      {element}
    </div>
  )
}

export default App;