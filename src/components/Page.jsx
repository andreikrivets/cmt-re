import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import { Spinner } from "react-bootstrap";

import Entry from "./entry/Entry";
import getData from "../data/getData";

const Page = ({ site }) => {
  const [data, setData] = useState();

  useEffect(() => {
    let cleanupFunction = false;
    const fetch = async () => {
      try {
        getData(site).then((req) => {
          if (!cleanupFunction) setData(req);
        });
      } catch (e) {
        // console.error(e)
      }
    };
    fetch();
    // eslint-disable-next-line no-return-assign
    return () => (cleanupFunction = true);
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
        <Entry key={uniqid()} dat={el} site={site} />
      ))}
    </>
  );
};

export default Page;
