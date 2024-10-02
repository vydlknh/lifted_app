import React, { useState } from "react";
import { auth, firestore } from "../firebase"
import { useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, getDocs, query, getDoc, setDoc } from "firebase/firestore";



const UserInfo = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    age: "",
    weight: "",
    height_ft: "",
    height_in: "",
    activity: "",
  });

  const user = auth.currentUser

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault
    
    const userid = user.uid
    try {
      await firestore.collection('users').doc(userid).set({
        ...userData,
        uid: userid,
      })
      navigate("/dashboard")
    } catch (error) {
      console.error("Error saving user info", error);
    }
  }

  return (
    <main>
      <section>
        <div className="header">
          <h1>About you</h1>
        </div>
        <div className="form">
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input 
              type="text"
              label="Name"
              // value={userData.name}
              onChange={handleChange}
              required
              placeholder="Name"/>
            <label htmlFor="age">Age</label>
            <input 
              type="number"
              label="Age"
              // value={userData.age}
              onChange={handleChange}
              required
              placeholder="Age"/>
            <label htmlFor="weight">Weight</label>
            <input 
              type="number"
              label="Weight"
              // value={userData.weight}
              onChange={handleChange}
              required
              placeholder="Weight"/>
            <div className="height">
              <label htmlFor="height_ft, height_in">Height</label>
              <input 
                type="number"
                // value={userData.height_ft}
                onChange={handleChange}
                required
                placeholder="feet"/>
              <input 
                type="number"
                // value={userData.height_in}
                onChange={handleChange}
                required
                placeholder="inches"/>
            </div>
            <label htmlFor="activity">Activity</label>
            <select name="activity" id="activity">
              <option value="1.2">Sedetary: office job, little or no exercise</option>
              <option value="1.375">Light: exercise 1-3 times a week</option>
              <option value="1.465">Moderate: excercise 4-5 times a week</option>
              <option value="1.55">Active: daily exercise or intense exercise 3-4 times/week</option>
              <option value="1.725">Very Active: intense exercise 6-7 times/week</option>
              <option value="1.9">Extra Active: very intense exercise daily, or physical job</option>
            </select>
            <button type="submit">
              Next
            </button>
          </form>
        </div>
      </section>
    </main>
  )

}

export default UserInfo;