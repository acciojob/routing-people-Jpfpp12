
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./UserList.js";
import UserDetails from "./UserDetails.js";

const App = () => {
  return (
    <Router>
      <div>

      {/* Do not remove the main div */}
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
