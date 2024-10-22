import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="Mother" style={{}}>
        <h1>Welcome to the Dashboard</h1>
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
            Log out
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
