import Photo from "./Photo";
import Post from "./Post";
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
        </ul>
      </nav>
      </div>
      <Routes>
        <Route path="/posts" element={<Post />} />
        <Route path="/photos" element={<Photo />} />
        {/* <Route path="/" element={<div className="welcome"><h1>Welcome to Api</h1></div>} /> */}
      </Routes>
    
    </Router>
  );
}

export default App;
