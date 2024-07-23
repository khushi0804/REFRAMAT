// // import React from "react";
// // // import { data } from "./data/data";
// // import { useGlobalContext } from "./context";
// // import { NavLink } from "react-router-dom";
// // import ProductCss from "./styles/Product.module.css";

// // const PartnersWith = () => {
// //   const { partners } = useGlobalContext();
// //   return (
// //     <div>
// //       <h1 className={ProductCss.headings}>OUR DISTRIBUTING PARTNERS</h1>
// //       <div className={ProductCss.mainDiv}>
// //         {partners.map((partner) => (
// //           <div key={partner.id} className={ProductCss.imgMainDiv}>
// //             <NavLink to={`/partnerdetails/${partner.id}`}>
// //               <img
// //                 className={ProductCss.imgDiv}
// //                 src={partner.image}
// //                 alt={partner.name}
// //               />
// //             </NavLink>
// //             <p>{partner.name}</p>
// //           </div>
// //         ))}
// //         {/*
// //         {data.map((item) => {
// //           return (
// //             <div key={item.id} className={ProductCss.imgMainDiv}>
// //               <img
// //                 className={ProductCss.imgDiv}
// //                 src={item.image}
// //                 alt={item.title}
// //               />
// //             </div>
// //           );
// //         })} */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PartnersWith;

// //------------------------------------------------------------

// import React,{ useState, useEffect } from "react";
// // import { data } from "./data/data";
// import { useGlobalContext } from "./context";
// import { NavLink,useParams } from "react-router-dom";
// import ProductCss from "./styles/Product.module.css";

// const PartnersWith = () => {
//   const { id } = useParams();
//   const [partner, setPartner] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/partners/${id}`)
//       .then((response) => response.json())
//       .then((data) => setPartner(data))
//       .catch((error) =>
//         console.error("Error fetching partner details:", error)
//       );
//   }, [id]);

//   if (!partner) {
//     return <div>Loading...</div>;
//   }

//   const { part } = useGlobalContext();
//   return (
//       <div className={ProductCss.detailsContainer}>
//       <h1>{part.name}</h1>
//       <img src={part.image} alt={part.name} />
//       <p>{part.details}</p>
//     </div>
//   );
// };

// export default PartnersWith;
//====================
// import React, { useState, useEffect } from "react";
// import { useGlobalContext } from "./context";
// import { useParams } from "react-router-dom";
// import ProductCss from "./styles/Product.module.css";

// const PartnersWith = () => {
//   const { id } = useParams();
//   const [partner, setPartner] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/partners/${id}`)
//       .then((response) => {
//         console.log("Response:", response);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const contentType = response.headers.get("content-type");
//         if (contentType && contentType.includes("application/json")) {
//           return response.text().then((text) => {
//             console.log("Response Text:", text);
//             try {
//               return JSON.parse(text);
//             } catch (e) {
//               throw new Error("Invalid JSON response");
//             }
//           });
//         } else {
//           throw new Error("Received non-JSON response");
//         }
//       })
//       .then((data) => setPartner(data))
//       .catch((error) => {
//         console.error("Error fetching partner details:", error);
//         setError(error.message);
//       });
//   }, [id]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!partner) {
//     return <div>Loading...</div>;
//   }

//   const { part } = useGlobalContext();
//   return (
//     <div className={ProductCss.detailsContainer}>
//       <h1>{part.name}</h1>
//       <img src={part.image} alt={part.name} />
//       <p>{part.details}</p>
//     </div>
//   );
// };

// export default PartnersWith;


import React, { useState, useEffect } from "react";
// import { useGlobalContext } from "./context";
import { useParams } from "react-router-dom";
import ProductCss from "./styles/Product.module.css";

const PartnersWith = () => {
  const { id } = useParams();
  const [partner, setPartner] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(id,'id....');
    const fetchPartner = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/partners`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setPartner(data);
      } catch (error) {
        console.error("Error fetching partner details:", error);
        setError(error.message);
      }
    };

    fetchPartner();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!partner) {
    return <div>Loading...</div>;
  }

  return (
    <div className={ProductCss.detailsContainer}>
       {partner.map((p) => (
        <div key={p.id}>
          <h1>{p.name}</h1>
          <img src={p.image} alt={p.name} />
          <p>{p.details}</p>
        </div>
      ))}
    {/* <p>{data}</p>
      <h1>{partner.name}</h1>
      <img src={partner.image} alt={partner.name} />
      <p>{partner.details}</p> */}
    </div>
  );
};

export default PartnersWith;

