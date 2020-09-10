import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

import "./entry.css";
import getRandomImage from "../data/getRandomImage";

const Entry = ({ dat }) => {
  const [imageURL, setImageURL] = useState("");
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

  return (
    <Card>
      <div
        className="container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(184, 219, 255, 0.3)), url(${
            dat.thumbnail || imageURL
          })`,
        }}
      >
        <div className="wrapper">
          <a
            href={dat.link}
            target="_blank"
            rel="noreferrer"
            className="header"
          >
            <h5>{dat.title}</h5>
          </a>
          <p className="descr">{firstSent}</p>
          <div className="info">
            <p className="info-obj">
              {dat.pubDate.slice(0, dat.pubDate.length - 3)}
            </p>
            <p className="info-name">{dat.author}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Entry;
