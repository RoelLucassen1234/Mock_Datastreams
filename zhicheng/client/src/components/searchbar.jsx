import React, { Component } from "react";
import { Form, Button, FormControl } from "react-bootstrap";

class Searchbar extends Component {
  render() {
    return (
      <div className="search-wrapper">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    );
  }
}

export default Searchbar;
