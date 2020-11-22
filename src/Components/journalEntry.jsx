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
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
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