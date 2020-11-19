import React, { Component } from "react";
import { Container, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <Container className="auth-wrapper">
        <Container className="auth-inner">
          <Card.Header className="header-meta">
            <h1 className="text-center">PROFILE</h1>
          </Card.Header>

          <Card.Body>
            <Table className="table col-md-6 mx-auto">
              <tbody>
                <tr>
                  <td>UserId</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Firstname</td>
                  <td>Zhicheng</td>
                </tr>
                <tr>
                  <td>Lastname</td>
                  <td>Yu</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>***.yu@student.fontys.nl</td>
                </tr>
              </tbody>
            </Table>
            <div className="link">
              <Link>Forgot password?</Link>
            </div>
          </Card.Body>
        </Container>
      </Container>
    );
  }
}

export default Profile;
