import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Get from "./Get/get";
import Put from "./Post/Post";
import Update from "./Update/Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Get />} />
        <Route path="/post" element={<Post />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
