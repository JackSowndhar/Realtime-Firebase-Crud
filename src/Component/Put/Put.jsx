import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Config/Firbase";
import { useNavigate } from "react-router-dom";
import "./Put.css";

const Put = () => {
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target[0].value,
      name: e.target[1].value,
      age: e.target[2].value,
    };

    try {
      await addDoc(collection(db, "users"), data);
      alert("Data Inserted Successfully ✅");
      navigate("/");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="form-container">
      <form className="form-card" onSubmit={submit}>
        <h1>Create User</h1>
        <input type="text" placeholder="Email" required />
        <input type="text" placeholder="Name" required />
        <input type="number" placeholder="Age" required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Put;
