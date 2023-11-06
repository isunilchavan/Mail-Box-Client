import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
