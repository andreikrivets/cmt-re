import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Page from "./components/Page";

const App = () => (
  <Container fluid="sm">
    <Tabs defaultActiveKey="tj">
      <Tab eventKey="tj" title="TJ">
        <Page site="0" />
      </Tab>
      <Tab eventKey="vc" title="VC">
        <Page site="1" />
      </Tab>
      <Tab eventKey="dtf" title="DTF">
        <Page site="2" />
      </Tab>
    </Tabs>
  </Container>
);

export default App;
