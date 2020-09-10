import React from "react";
import { Card } from "react-bootstrap";

const Entry = ({ dat }) => {
  const ind = dat.description.indexOf("<");
  const descr = ind ? dat.description.slice(0, ind) : dat.description;
  return (
    <Card style={{ margin: "2% 0", height: "200px" }}>
      <div
        style={{
          height: "200px",
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(184, 219, 255, 0.3)), url(${dat.thumbnail})`,
          backgroundSize: "cover",
          padding: "2%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <a
          href={dat.link}
          style={{
            textAlign: "center",
            textDecoration: "none",
            color: "rgba(4, 74, 60, 1)",
          }}
        >
          <h5
            style={{
              fontWeight: "bold",
              fontSize: "2vh",
              background: "rgba(255, 255, 255, 0.9)",
            }}
          >
            {dat.title}
          </h5>
        </a>
        <p
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            color: "rgba(2, 41, 33, 1)",
            fontSize: "1.6vh",
          }}
        >
          {descr.length > 100 ? `${descr.slice(0, 100)}...` : descr}
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            fontSize: "1.5vh",
          }}
        >
          <p style={{ background: "rgba(255, 255, 255, 0.9)" }}>
            {dat.pubDate.slice(0, dat.pubDate.length - 3)}
          </p>
          <p
            style={{
              fontStyle: "italic",
              background: "rgba(255, 255, 255, 0.9)",
            }}
          >
            {dat.author}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Entry;
