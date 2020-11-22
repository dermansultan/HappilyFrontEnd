import React from "react";
import botHappy from '../Assets/Img/GreatBot.png'

const Start = () => {
  return (
    <div className="containerMain home">
      <div className="ContentWrapper home">
        <div className="botPlaceHolder">
          <img alt="HapplyTheBot" src={botHappy} style={{width:"auto", height:"15em"}}/>
          <h1 className="header white" style={{ color: "white", paddingTop:"50px" }}>
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
