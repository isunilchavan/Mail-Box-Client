import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard"; // Import Dashboard component
import EmailSender from "./components/EmailSender";

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/composeMail" element={<EmailSender />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
