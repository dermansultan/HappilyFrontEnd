import React from 'react'; 
import axios from 'axios';
import {  Link } from "react-router-dom";

class RegisterForm extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {value: '', show: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showModal = () => {
    this.setState({show:true});
  }

  hideModal = () => {
    this.setState({show:false});
  }


   Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <button
            onClick={handleClose}
          >
            Close
          </button>
        </section>
      </div>
    );
  };
  

  handleChange(event) {
    this.setState({value: event.target.value});
  }

   pingServer = () => 
  {
    console.log("Pinging server"); 
    
    axios.get('http://localhost:3050/ping').then((res)=> {
      console.log(res);
      console.log('Ping response:', res.data);
    })  
  }

  handleSubmit(event) {
     
    this.pingServer(); 
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className='form Register' onSubmit={this.handleSubmit}>
        <label>
          Name:
          </label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        <label>
          Password
          </label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        <label>
          Email
          </label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className='registerFormBtn'><Link to="/Onboarding">Onboarding</Link></button>
      </form>
    );
  }


}



export default RegisterForm