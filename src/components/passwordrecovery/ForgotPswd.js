import React from "react";
import "../loginsignup/LoginSignup.css";
import MailIcon from "../Assets/mail.png";
import { useNavigate } from "react-router-dom";
const ForgotPswd = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Password Recovery</h1>
      <div
        className="underline"
        style={{
          width: "290px",
        }}></div>
      <div
        style={{
          color: "black",
          textAlign: "center",
          fontSize: "26px",
          fontWeight: "700",
          justifyContent: "center",
          alignItems: "center",
          margin: "30px",
        }}>
        Email
      </div>
      <div
        style={{
          color: "black",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "500",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <img alt="user" className="Icon" src={MailIcon} />
        <input
          type="text"
          className="input"
          style={{ width: "200px" }}
          placeholder="Enter your email"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#4A4947",
            alignItems: "center",
            height: "80px",
            width: "250px",
            color: "white",
            fontSize: "30px",
            fontWeight: "700",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            textAlign: "center",
            textDecoration: "none",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#7c7c7c")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#4A4947")
          }
          onClick={handleButtonClick}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ForgotPswd;
