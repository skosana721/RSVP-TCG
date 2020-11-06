import React, { Component } from "react";
import "./App.css";
import Event from "./component/Event";
import {Container} from 'reactstrap'

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TCG RSVP</h1>
        </header>
        <Container>

        <Event />
        </Container>
          
             
      </div>
    );
  }
}

export default App;
