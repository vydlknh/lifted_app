import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import { collection, deleteDoc, doc, getDocs, query, getDoc, setDoc } from "firebase/firestore";



const Home = () => {
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

  return (
    <section>
      <h1>Lifted</h1>
      <button onClick={handleLogout}>
        Logout
      </button>
    </section>
  );
};
export default Home;
