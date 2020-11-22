import React from "react";

class UserQuiz extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
        // bind methods
    }

    // define methods

    render(){
        return (
            <div className='containerMain UserQuiz'>
                <div className='left UserQuiz'>
                <div className='userQuizContentLeft'>
                <img alt='HapplyTheBot'/>
                </div>
                </div>
                <div className='right UserQuiz'>
                <div className='userQuizContentRight'>
                <div className='feelingWrapper'>
                <h1 className='subheader'>How are you feeling today?</h1>
                <div className='feelingIconWrapper'>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                </div>
                <div className="journalWrapper">
                <h1 className='subheader'>Would you like to journal today?</h1>
                <div className='journalChoiceBtnWrapper'>
                    <button>Yes</button>
                    <button>No</button>
                </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}


export default UserQuiz