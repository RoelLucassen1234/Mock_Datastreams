import React, { Component } from "react";

export default class Setpassword extends Component {
  render() {
    return (
      <div className="adminwrapper">
        <div className="adminform-wrapper">
          <h1>Set passowrd</h1>
          <p>Create a new passowrd for the account</p>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="loginpassword">
              <label htmlFor="loginpassword">New Passowrd</label>
              <input
                type="text"
                placeholder="New Passowrd"
                name="loginpassword"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="loginemail">
              <label htmlFor="loginemail">Confirm Password</label>
              <input
                type="text"
                placeholder="Confirm Password"
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
