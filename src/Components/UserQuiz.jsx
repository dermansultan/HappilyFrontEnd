import React from "react";
import badBot from "../Assets/Img/Badbot.png";
import GoodBot from "../Assets/Img/GoodBot.png";
import GreatBot from "../Assets/Img/GreatBot.png";
import UnsureBot from "../Assets/Img/UnsureBot.png";
import headBot from "../Assets/Img/headBot.png"
import JournalEntry from "./journalEntry"

class UserQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // bind methods
  }

  // define methods

  render() {
    return (
      <div className="containerMain UserQuiz">
        <div className="left UserQuiz">
          <div className="userQuizContentLeft">
            <img className='bot quizBanner' alt="HapplyTheBot" src={headBot} />
          </div>
        </div>
        <div className="right UserQuiz">
          <div className="userQuizContentRight">
          <JournalEntry></JournalEntry>
            <div className="feelingWrapper" style={{display:"none"}}>
              <h1 className="subheader center">How are you feeling today?</h1>
              <div className="feelingIconWrapper">
                <div className="botIconFeelWrapper">
                  <img className="feelingIcon" src={GoodBot}></img>
                  <p className='bodyText black'>Good</p>
                </div>
                <div className="botIconFeelWrapper">
                  <img className="feelingIcon" src={GreatBot}></img>
                  <p className='bodyText black'>Great</p>
                </div>
                <div className="botIconFeelWrapper">
                  <img className="feelingIcon" src={badBot}></img>
                  <p className='bodyText black'>Bad</p>
                </div>
                <div className="botIconFeelWrapper">
                  <img className="feelingIcon" src={UnsureBot}></img>
                  <p className='bodyText black'>Unsure</p>
                </div>
              </div>
              <div className="journalWrapper">
                <h1 className="subheader center">
                  Would you like to journal today?
                </h1>
                <div className="journalChoiceBtnWrapper">
                  <button className='btn journalChoice'>Yes</button>
                  <button className='btn journalChoice'>No</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserQuiz;
