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
                </div>
                </div>
                <div className='right UserQuiz'>
                <div className='userQuizContentRight'>
                <h1 className='header'>Time for some extras</h1>
                <h2 className='subheader'>All choices are optional, feel free to skip as you like.</h2>
                </div>
                </div>
            </div>
        )
    }
}


export default UserQuiz