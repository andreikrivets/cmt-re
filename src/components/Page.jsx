/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import uniqid from "uniqid";

import Entry from "./Entry";
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

  if (!data) return null;
  return (
    <>
      {data.items.map((el) => (
        <Entry key={uniqid()} dat={el} />
      ))}
    </>
  );
};

export default Page;
