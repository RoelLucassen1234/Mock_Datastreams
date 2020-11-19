import React, { Component } from "react";

export default class Admin extends Component {
  render() {
    return (
      <div className="adminwrapper">
        <div className="adminform-wrapper">
          <h1>Register</h1>
          <p>Create a new account for the researcher</p>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="loginpassword">
              <label htmlFor="loginpassword">Email</label>
              <input
                type="text"
                placeholder="Email"
                name="loginpassword"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="loginemail">
              <label htmlFor="loginemail">Confirm Email</label>
              <input
                type="text"
                placeholder="Email"
                name="loginemail"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="createAccount">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
