import Login from "./components/loginsignup/Login";
import Dashboard from "./components/loginsignup/Dashboard";
import "./components/loginsignup/LoginSignup.css";
import SignUp from "./components/loginsignup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPswd from "./components/passwordrecovery/ForgotPswd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPswd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
