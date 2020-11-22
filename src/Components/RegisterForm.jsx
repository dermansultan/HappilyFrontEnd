import React from 'react'
import {  Link } from "react-router-dom";


class RegisterForm extends React.Component {
  constructor(props) {
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