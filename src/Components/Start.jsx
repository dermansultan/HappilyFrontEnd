import React from "react";

const Start = () => {
  return (
    <div className="containerMain home">
      <div className="ContentWrapper home">
        <div className="botPlaceHolder">
          <img alt="HapplyTheBot"/>
          <h1 className="header white" style={{ color: "white" }}>
            Welcome!
          </h1>
        </div>
        <button className="btn long signUp">Sign Up</button>
        <h2 className="subHeader white start">
          Already have an account? <span>Login</span>
        </h2>
      </div>
    </div>
  );
};

export default Start;
