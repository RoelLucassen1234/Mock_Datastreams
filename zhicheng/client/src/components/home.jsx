import React, { Component } from "react";
import Coronaimg from "../components/image/corona.jpg";
import { CardDeck, Card, Button } from "react-bootstrap";

export default class Admin extends Component {
  render() {
    return (
      <div class="col d-flex justify-content-center">
        <div class="card-wrapper">
          <CardDeck >
            <Card className="text-center">
              <Card.Img variant="top" src={Coronaimg} />
              <Card.Body>
                <Card.Title>Corona Raid Test Data</Card.Title>
                <Card.Text>
                  Click the button to access Corona Rapid Test Data
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button href="/data">Go somewhere</Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={Coronaimg} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary">Go somewhere</Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={Coronaimg} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary">Go somewhere</Button>
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>
      </div>
    );
  }
}
