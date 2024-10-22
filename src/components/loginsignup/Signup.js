import "./LoginSignup.css";
import PasswordIcon from "../Assets/lock.png";
import MailIcon from "../Assets/mail.png";
import { useNavigate } from "react-router-dom";
const LoginSignup = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="mother">
        <div className="header">Sign Up</div>
        <div className="underlineMother">
          {" "}
          <div className="underline"></div>
        </div>
        <div className="usernameText">Name</div>
        <div className="nameContainer">
          <input type="text" className="input3" placeholder="First name" />{" "}
          <input type="text" className="input3" placeholder="Last name" />
        </div>

        <div className="passwordText">Email</div>
        <div className="passwordInput">
          <img alt="user" className="Icon" src={MailIcon} />
          <input
            type="text"
            className="input1"
            placeholder="Enter your email"
          />
        </div>
        <div className="passwordText">Date of birth</div>
        <div className="passwordInput">
          <input
            type="date"
            className="input1"
            placeholder="Enter your email"
          />
        </div>

        <div className="passwordText">Password</div>
        <div className="passwordInput">
          <img alt="user" className="Icon" src={PasswordIcon} />
          <input
            type="password"
            className="input1"
            placeholder="Set your password"
          />
        </div>

        <div className="forgotPassword"></div>
        <div className="loginButton">
          <button
            className="buttonLogin"
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
            Create Account
          </button>
        </div>
        <div>
          <div className="createAccount">
            Have an account?{" "}
            <span className="linkcreateAccount" onClick={handleButtonClick}>
              Login here{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
