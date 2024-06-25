import React from "react";
import { useGlobalContext } from "./context";
import { data,dass} from "./data/data";
import ProductCss from "./styles/Product.module.css";

const Products = () => {
  const { products } = useGlobalContext();
  console.log(products);
  return (
    
    <div>
      <h1>OUR DISTRIBUTING PARTNERS</h1>
      
      <div className={ProductCss.mainDiv}>
      
      {data.map((item, index) => {
        return (
          <div key={index} className={ProductCss.imgMainDiv}>
            <img className={ProductCss.imgDiv} src={item.image} alt={item.title} />
          </div>
        );
      })}
    </div>
    <h1></h1>
    <div></div>
    </div>
  );
};

export default Products;
