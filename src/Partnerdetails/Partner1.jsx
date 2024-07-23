// import React from "react";
// import {data} from "../data/data";
// import PartnerDetailsCss from "../PartnerDetails/PartnerDetails.css"
// const Partner1 = () => {
//   const partner = data.find((p) => p.id === 1);

//   return (
//     <div className={PartnerDetailsCss.container}>
//       <h1>{partner.title}</h1>
//       <img src={partner.image} alt={partner.title} className={PartnerDetailsCss.image} />
//     </div>
//   );
// };

// export default Partner1;
import React from "react";
import { data } from "../data/data";
import "./PartnerDetails.css";  // Ensure this path is correct

const Partner1 = () => {
  const partner = data.find((p) => p.id === 1);

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

export default Partner1;

