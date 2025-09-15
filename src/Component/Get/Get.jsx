import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../Config/Firbase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import "./Get.css";

const Get = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, "users");
      const querySnapshot = await getDocs(collectionRef);
      const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setValue(users);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const docRef = doc(db, "users", id);
    await deleteDoc(docRef);
    setValue(value.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div className="top">
        <div className="title">
          <h1>REALTIME CRUD</h1>
        </div>
        <div className="create">
          <Link to={"/Put"}> Create +</Link>
        </div>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {value.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>
                  <Link to={`/update/${item.id}`}>🛠️</Link>
                  <button onClick={() => handleDelete(item.id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Get;
