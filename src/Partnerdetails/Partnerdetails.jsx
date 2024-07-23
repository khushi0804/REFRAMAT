import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCss from "../styles/Product.module.css";

const Partnerdetails = () => {
  const { id } = useParams();
  const [partner, setPartner] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/partners/${id}`)
      .then((response) => response.json())
      .then((data) => setPartner(data))
      .catch((error) =>
        console.error("Error fetching partner details:", error)
      );
  }, [id]);

  if (!partner) {
    return <div>Loading...</div>;
  }

  return (
    <div className={ProductCss.detailsContainer}>
      <h1>{partner.name}</h1>
      <img src={partner.image} alt={partner.name} />
      <p>{partner.details}</p>
    </div>
  );
};

export default Partnerdetails;
