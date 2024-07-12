// // import React from "react";
// // import { useGlobalContext } from "./context";
// // import { data } from "./data/data";
// // import ProductCss from "./styles/Product.module.css";

// // const PartnersWith = () => {
// //   const { products } = useGlobalContext();
// //   console.log(products);
// //   return (
// //     <div>
// //       <h1 className={ProductCss.headings}>OUR DISTRIBUTING PARTNERS</h1>

// //       <div className={ProductCss.mainDiv}>
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
// //         })}
// //       </div>
// //       <h1></h1>
// //       <div></div>
// //     </div>
// //   );
// // };

// // export default PartnersWith;

// import React from "react";
// import { useGlobalContext } from "./context";
// import { NavLink } from "react-router-dom";
// import ProductCss from "./styles/Product.module.css";

// const PartnersWith = () => {
//     const { partners } = useGlobalContext();
//     return (
//         <div>
//             <h1 className={ProductCss.headings}>OUR DISTRIBUTING PARTNERS</h1>
//             <div className={ProductCss.mainDiv}>
//                 {partners.map((partner) => (
//                     <div key={partner.id} className={ProductCss.imgMainDiv}>
//                         <NavLink to={`/partnerdetails/${partner.id}`}>
//                             <img
//                                 className={ProductCss.imgDiv}
//                                 src={partner.image}
//                                 alt={partner.name}
//                             />
//                         </NavLink>
//                         <p>{partner.name}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default PartnersWith;

import React from "react";
// import { data } from "./data/data";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import ProductCss from "./styles/Product.module.css";

const PartnersWith = () => {
  const { partners } = useGlobalContext();
  return (
    <div>
      <h1 className={ProductCss.headings}>OUR DISTRIBUTING PARTNERS</h1>
      <div className={ProductCss.mainDiv}>
        {partners.map((partner) => (
          <div key={partner.id} className={ProductCss.imgMainDiv}>
            <NavLink to={`/partnerdetails/${partner.id}`}>
              <img
                className={ProductCss.imgDiv}
                src={partner.image}
                alt={partner.name}
              />
            </NavLink>
            <p>{partner.name}</p>
          </div>
        ))}
        {/* 
        {data.map((item) => {
          return (
            <div key={item.id} className={ProductCss.imgMainDiv}>
              <img
                className={ProductCss.imgDiv}
                src={item.image}
                alt={item.title}
              />
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default PartnersWith;
