import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SinglePhone from "./SinglePhone";

const Phones = () => {
  const phones = useLoaderData();
  // console.log(phones);
  return (
    <div>
      <h2>All Phones Here: {phones.length}</h2>
      {phones.map((phone) => (
        <li key={phone.id}>
          <Link to={`/phone/${phone.id}`}>
            {phone.name} {phone.img}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Phones;
