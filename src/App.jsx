import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Page from "./components/Page";

const tabStyle = {
  position: "relative",
  top: "20px",
};

const App = () => (
  <Container fluid="sm">
    <Tabs
      defaultActiveKey="tj"
      style={{
        position: "sticky",
        top: "0",
        zIndex: "10",
        background: "white",
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Tab eventKey="tj" title="TJ" style={tabStyle}>
        <Page site="0" />
      </Tab>
      <Tab eventKey="vc" title="VC" style={tabStyle}>
        <Page site="1" />
      </Tab>
      <Tab eventKey="dtf" title="DTF" style={tabStyle}>
        <Page site="2" />
      </Tab>
    </Tabs>
  </Container>
);

export default App;
