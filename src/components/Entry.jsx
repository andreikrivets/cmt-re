/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

import getRandomImage from "../data/getRandomImage";

const Entry = ({ dat }) => {
  const [imageURL, setImageURL] = useState("");
  const [hover, setHover] = useState(false);
  const ind = dat.description.indexOf("<");
  const descr = ind ? dat.description.slice(0, ind) : dat.description;
  const firstSentIndex = descr.indexOf(".");
  const firstSent = descr.slice(0, firstSentIndex + 1) || descr;

  useEffect(() => {
    const getImageURL = async () => {
      const req = await getRandomImage();
      setImageURL(req);
    };
    getImageURL();
  }, []);

  const position = dat.thumbnail ? "top" : "center";
  return (
    <Card
      style={{
        margin: "2% 0",
        height: "200px",
        filter: hover ? "none" : "grayscale(80%)",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          width: "100%",
          position: "absolute",
          height: "400px",
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(184, 219, 255, 0.3)), url(${
            dat.thumbnail || imageURL
          })`,
          backgroundSize: "cover",
          padding: "2%",
          textAlign: "center",
          backgroundPositionY: hover ? "bottom" : "top",
          animation: hover ? "MoveBackground 5s linear 1" : "none",
        }}
      >
        <div>
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
            {firstSent}
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
      </div>
    </Card>
  );
};

export default Entry;
