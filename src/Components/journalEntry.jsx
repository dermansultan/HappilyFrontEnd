import Axios from "axios";
import React from "react";

class JournalEntry extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        let prompt = this.state.value;
        console.log("Journal Button clicked"); 
        Axios.post('http://localhost:3050/classify', {value : prompt}).then((res)=> {
          console.log("result", res); 
          let score = res.data
          console.log(score); 
          let emotion = res.data[1]
          console.log(emotion);
        })

      }
    
      render() {
        return (
            <div className='journalFormContainer'>
                <h1 className='subheader center'>Great! Tell me about it.</h1>
                <form className='journalForm' onSubmit={this.handleSubmit} id='journalForm'>
                <label>Reset Journal Entry</label>
                <textarea className='journalInput' type="text" form='journalForm' value={this.state.value} onChange={this.handleChange} />
                <div className="formBtnWrapper">
                <button className='journalBtn Cancel'>I don’t feel like journaling today</button>
                <input className='journalBtn Next' type='submit' value="Next"></input>
                </div>
                </form>
            </div>
        );
      }
    }


export default JournalEntry