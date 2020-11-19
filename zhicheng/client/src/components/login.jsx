import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default class Login extends Component {
  render() {
    return (
      <div className="loginwrapper">
        <div className="loginform-wrapper">
          <h1>Login</h1>
          <p>To view information please login </p>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="loginemail">
              <label htmlFor="loginemail">Enter Email</label>
              <input
                type="text"
                placeholder="Email"
                name="loginemail"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="loginpassword">
              <label htmlFor="loginpassword">Enter Password</label>
              <input
                type="text"
                placeholder="Password"
                name="loginpassword"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </div>

            <div className="createAccount">
              <button type="submit">Submit</button>
            </div>

            <div className="link">
              <Link>Forgot password?</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
