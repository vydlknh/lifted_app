import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
        
      });
  }

  return(
    <main>
      <section>
        <div className="header">
        <h1>Lifted</h1>
        <button onClick={handleLogout}>
          Logout
        </button>
        </div>
      </section>
    </main>
  )
}

export default Dashboard;