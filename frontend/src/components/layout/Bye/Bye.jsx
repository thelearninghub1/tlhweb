import React from "react";
import { useNavigate } from "react-router-dom";
import "./Bye.css";

const Bye = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
    // Ensure scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="bye-container">
      <div className="bye-card">
        <h1 className="bye-title">Thank you for contacting us!</h1>
        <button onClick={handleBack} className="bye-button">
          Back
        </button>
      </div>
    </div>
  );
};

export default Bye;
