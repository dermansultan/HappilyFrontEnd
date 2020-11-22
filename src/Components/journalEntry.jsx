import Axios from "axios";
import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery'; 
import badBot from "../Assets/Img/Badbot.png";
import UnsureBot from "../Assets/Img/UnsureBot.png";
import GoodBot from "../Assets/Img/GoodBot.png";



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
          let score = res.data.Score
          console.log(score); 
          let emotion = res.data.emotion
          console.log(emotion);
          if(emotion=="anxiety" && score < 1){
            $('.botModal').css("visibility", "visible")
            $('#modalImage').attr("src", UnsureBot); 
            $('#modalText').html("You seem very anxious, are you okay? ");
          
          }
          else if(score ==-1){
            $('.botModal').css("visibility", "visible")
            $('#modalImage').attr("src", badBot); 
            $('#modalText').html("Seems like you aren't feeling well");
          }
          else if(score > 1 || score==0){
            $('.botModal').css("visibility", "visible")
            $('#modalImage').attr("src", GoodBot); 
            $('#modalText').html("I am gald to see that you feel better.");
          
          }
          console.log(); 
          
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