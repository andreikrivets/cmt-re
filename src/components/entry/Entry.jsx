import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

import "./entry.css";
import getRandomImage from "../../data/getRandomImage";
import ModalWindow from "../Modal";

const Entry = ({ dat, site }) => {
  const [imageURL, setImageURL] = useState("");
  const [hover, setHover] = useState(false);
  const [modalShow, setModalShow] = useState(false);
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
    <Card
      onMouseEnter={() => setHover(true)}
      onPointerEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onPointerLeave={() => setHover(false)}
      style={{
        filter: hover ? "none" : "grayscale(80%)",
      }}
    >
      <div
        className="container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(184, 219, 255, 0.3)), url(${
            dat.thumbnail || imageURL
          })`,
          backgroundPositionY: hover ? "bottom" : "top",
          animation: hover ? "5s ease-out 1 bgMove" : "none",
        }}
      >
        <div className="wrapper">
          <button
            type="button"
            href={dat.link}
            target="_blank"
            rel="noreferrer"
            className="header"
            onClick={() => setModalShow(true)}
          >
            <h5>{dat.title}</h5>
          </button>
          <p className="descr">{firstSent}</p>
          <div className="info">
            <p className="info-obj">
              {dat.pubDate.slice(0, dat.pubDate.length - 3)}
            </p>
            <p className="info-name">{dat.author}</p>
          </div>
        </div>
      </div>
      <ModalWindow
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={dat.guid}
        site={site}
        cover={dat.thumbnail || ""}
      />
    </Card>
  );
};

export default Entry;
