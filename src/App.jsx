import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Page from "./components/Page";

const App = () => {
  return (
    <Container fluid="sm">
      <Tabs id="tabs" defaultActiveKey="0">
        <Tab eventKey="0" title="TJ">
          <Page site={0} />
        </Tab>
        <Tab eventKey="1" title="VC">
          <Page site={1} />
        </Tab>
        <Tab eventKey="2" title="DTF">
          <Page site={2} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default App;
