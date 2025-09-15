import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../Config/Firbase";
import { useNavigate, useParams } from "react-router-dom";
import "./Update.css";

const Update = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    age: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const docRef = doc(db, "users", id);
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        setFormData(snap.data());
      } else {
        alert("❌ User not found");
        navigate("/");
      }
    };
    fetchUser();
  }, [id, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "users", id);
      await updateDoc(docRef, {
        email: formData.email,
        name: formData.name,
        age: formData.age,
      });
      alert("Data Updated Successfully ✅");
      navigate("/");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <div className="form-container">
      <form className="form-card" onSubmit={submit}>
        <h1>Update User</h1>
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
