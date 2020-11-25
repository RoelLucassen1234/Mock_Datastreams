import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

export default class Login extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Registration</h1>
          <p>To Register please take the time to fill information below </p>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="link">
              
            </div>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="phonenumber">
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                name="phonenumber"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Company/Institution Name</label>
              <input
                type="text"
                placeholder="Company/Institution Name"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="phonenumber">
              <label htmlFor="phonenumber">Company/Institution URL</label>
              <input
                type="text"
                placeholder="Company/Institution URL"
                name="phonenumber"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Company/Institution Position</label>
              <input
                type="text"
                placeholder="Company/Institution Position"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <p>
              Please click the box below to help assure that a person and not an
              automated program is submitting this application.{" "}
            </p>
            <ReCAPTCHA
              className="g-recaptcha"
              sitekey="6Lfjp-EZAAAAAKs2qPIVg38Nv3XWrAlF9ekYwZNL"
            />
            <p>
              Please note that any personal information you provide will be
              treated in accordance with the CRTD Terms and Conditions and CRTD
              Privacy Notice
            </p>
            <div className="createAccount">
              <button type="submit"> Create Account</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
