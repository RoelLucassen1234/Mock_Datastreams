import React, { Component } from "react";

export default class Verify extends Component {
  render() {
    return (
      <div className="adminwrapper">
        <div className="adminform-wrapper">
          <p>Please check your email and Verify your email</p>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="loginpassword">
              <label htmlFor="loginpassword"></label>
              <input
                type="text"
                placeholder="Secret Token"
                name="loginpassword"
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
