import React from "react";
import { Card } from "react-bootstrap";

const Entry = ({ dat }) => {
  const ind = dat.description.indexOf("<");
  return (
    <Card style={{ margin: "3% 0", maxHeight: "300px" }}>
      <img src={dat.enclosure.link} alt="v" />
      <div>
        <a href={dat.link} style={{ textAlign: "center" }}>
          <h5>{dat.title}</h5>
        </a>
        <p>{ind ? dat.description.slice(0, ind) : dat.description}</p>
      </div>
    </Card>
  );
};

export default Entry;
