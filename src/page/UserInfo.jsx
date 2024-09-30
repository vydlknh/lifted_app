import React, { useState } from "react";
import { firestore } from "@/firebase"
import { useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, getDocs, query, getDoc, setDoc } from "firebase/firestore";



const UserInfo = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const onSubmit = async (info) => {
    const docRef = doc(collection(firestore, "users"), item);
    await setDoc(docRef, { name: name });
  }

  return (
    <main>
      <section>
        <div className="header">
          <h1>About you</h1>
        </div>
        <div className="form">
          <form action="">
            <label htmlFor="name">Name</label>
            <input 
              type="text"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"/>
            <button type="submit" onClick={onSubmit}>
              Next
            </button>
          </form>
        </div>
      </section>
    </main>
  )

}

export default UserInfo;