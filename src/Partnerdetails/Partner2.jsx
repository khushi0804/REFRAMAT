import React from "react";
import { data } from "../data/data";
import "./PartnerDetails.css";  // Ensure this path is correct

const Partner2 = () => {
  const partner = data.find((p) => p.id === 2);

  if (!partner) {
    return <p>Partner not found</p>;
  }

  return (
    <div className="container">
      <h1>{partner.title}</h1>
      <img src={partner.image} alt={partner.title} className="image" />
    </div>
  );
};

export default Partner2;

