import "./LoginSignup.css";
import UserIcon from "../Assets/user.png";
import PasswordIcon from "../Assets/lock.png";
import { useNavigate } from "react-router-dom";
const LoginSignup = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/dashboard");
  };
  const handleButtonClick1 = () => {
    navigate("/signup");
  };
  const handleButtonClick2 = () => {
    navigate("/forgotpassword");
  };
  return (
    <div>
      <div className="mother">
        <div className="header">Login</div>
        <div className="underlineMother">
          {" "}
          <div className="underline"></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div>
            <div className="usernameText">Username or Email</div>
            <div className="usernameInput">
              <img alt="user" className="Icon" src={UserIcon} />
              <input
                type="text"
                className="input"
                placeholder="Enter your username or email"
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="passwordText">Password</div>
            <div className="passwordInput">
              <img alt="user" className="Icon" src={PasswordIcon} />
              <input
                type="password"
                className="input1"
                placeholder="Enter your password"
              />
            </div>
          </div>
        </div>
        <div className="forgotPassword">
          <div>
            Forgot password?{" "}
            <span className="linkFogotpassword" onClick={handleButtonClick2}>
              Click here
            </span>
          </div>
        </div>
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
            Login
          </button>
        </div>
        <div>
          <div className="createAccount">
            Don't have an account?{" "}
            <span className="linkcreateAccount" onClick={handleButtonClick1}>
              Sign up here{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
