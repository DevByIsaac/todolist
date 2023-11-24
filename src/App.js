import React, {useState} from "react";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import TaskPage from "./TaskPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () =>{
    setDarkMode(!darkMode);
  };
  return (
    <Router>
      <div>
        <button></button>
      </div>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/taskpage" element={<TaskPage />} />
        <Route path="/" element={<Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
}

export default App;
