import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import uniqid from "uniqid";
import ReactMarkdown from "react-markdown";

import getFull from "../data/getFull";

const ModalWindow = (props) => {
  const { id, site, cover } = props;
  const [full, setFull] = useState({});
  useEffect(() => {
    const fetchFull = async () => {
      const req = await getFull(site, id);
      setFull(req);
    };
    fetchFull();
  }, []);
  if (!full.title) return null;
  return (
    <Modal
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <a href={`${full.url}`} target="_blank" rel="noreferrer">
            {full.title}
          </a>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cover ? (
          <img
            src={`${cover}`}
            alt="img"
            style={{ width: "39vh", float: "left", margin: "5px" }}
          />
        ) : null}
        {full.blocks.map((el) => (
          <ReactMarkdown
            key={uniqid()}
            source={el.data.text}
            linkTarget="_blank"
          />
        ))}
      </Modal.Body>
    </Modal>
  );
};

export default ModalWindow;
