/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import { Spinner } from "react-bootstrap";

import Entry from "./entry/Entry";
import getData from "../data/getData";

const Page = ({ site }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const req = await getData(site);
      setData(req);
    };
    fetchData();
  }, []);

  if (!data)
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spinner
          animation="grow"
          role="status"
          variant="primary"
          style={{ marginTop: "200px" }}
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  return (
    <>
      {data.items.map((el) => (
        <Entry key={uniqid()} dat={el} />
      ))}
    </>
  );
};

export default Page;
