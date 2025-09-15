import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Get from "./Get/get";
import Put from "./Put/Put";
import Update from "./Update/Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Get />} />
        <Route path="/put" element={<Put />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
