// create a context (warehouse)
//povider
//cosumer
// ware house transfers the provider to consumer here we use API context with hooks
import React, { useContext, useEffect, useReducer,useState,createContext } from "react";
import reducer from "./reducer"
// import { Children } from "react";
const AppContexts = createContext();
const AppContext = React.createContext();
// by this line we are creating a warehouse context for the provider and the consumer.


// const API = "https://thapareactapi.up.railway.app/";
const intialState ={
    name:"",
    image:"",
    para:"",
    products:[],
    partners:[],
    loading: true,
};


const AppProviders = ({ children }) => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
      fetch('http://localhost:5000/api/partners')
          .then((response) => response.json())
          .then((data) => setPartners(data))
          .catch((error) => console.error('Error fetching partners:', error));
  }, []);
  return (
    <AppContext.Provider value={{ partners }}>
        {children}
    </AppContext.Provider>
);
}




const AppProvider = ({ children }) => {

    const [state,dispatch]=  useReducer(reducer,intialState);
   // dispatch already trigger the action ,method of our reducer function
    const updateHomePage = () => {
        return dispatch({
          type: "HOME_UPDATE",
          payload: {
            name: "REFRAMAT ENTERPRISES",
            image: "./images/hope.jpg",
          para:`– Your Single Solution Serving Platter – for BEST IN CLASS – Refractories, Thermal Insulation, Premium Solutions for Conserving Energy!We serve across industries including Iron & Steel, Cement, Power, Non Ferrous…. With premium solution offerings for industrial products including Refractories – Shaped (Bricks, Special Shaped) & Unshaped (Monolithics – Ramming Masses, Castables, Mortars), Thermal Insulation – Ceramic Fibre products (Ceramic Fibre Blankets, Boards, Papers, Textiles, Modules), Rockwool Products (Slabs, Wired Mat, Pipe Sections), Calcium Silicate – HYSIL (Blocks, Pipe Sections), Bio-soluble Products, Microporous Boards and Bulk product offerings (Ferro Alloys, Carbon products like CPC, Grahpite Granules, Metallics like Pig Iron, Sponge Iron)..From serving the industrial setups thus far, we are pleased to shared endeavours to diversify now into speciality Household solutions supplies. Initial focus, apart from insulation and acoustic solutions, is aimed at Automation devices, which syncs with our ideology of supporting Energy conservation..`
          
          },
        });
      };
    
      const udpateAboutPage = () => {
        return dispatch({
          type: "ABOUT_UPDATE",
          payload: {
            name: " ABOUT REFRAMATES",
            image: "./images/hope2.jpg",
            para:"REFRAMAT furnishes quality industrial products across major industries, with prime focus on supply of Furnace Materials. In-line with aim to serve patrons as a Single platter Solution, Reframat hosts multiple industrial products including Ferro Alloys, Metallics (like Sponge Iron, Pig Iron), Carbon Prod <br> Products (like Calcined Petroleum Coke, Met Coke, Graphite granules)Minerals, Fluxes, Steel Products (like ,Ingots, Billets). We are authorized marketing partner of leading manufacturers of Refractories, Thermal insulations, Abrasives, Iron & AlloysPowder, Acid Proof Solutions. Refractories, i.e., Refractory Fire <br> Bricks, Refractory Castables, Mortars, Ramming Mass are offered from best of manufacturing setups.“We remain grateful to our patrons across industries who have been shown years of continued faith in our services..."
          },
        });
      };
    // to get API data in our page 
    const getProducts= async(url)=>{
// here we passing the async to error handling and the url is passing as parameter and getting as argument 
try{
    const res= await fetch(url);
    const data = await res.json();
    dispatch({type:"GET_PRODUCTS", payload:data})
}catch(error){
console.log(error)
}
    };

    //   to call the API for products page
    useEffect(()=>{
      getProducts();
    },[])

    // here we are creating the reducer hook for the API's use reducer hook
    return (<AppContext.Provider value={{...state,updateHomePage, udpateAboutPage }}>
        {children} 
           </AppContext.Provider>);
};


// here we creating a custom hook of our named global

const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext, AppProvider, useGlobalContext,AppProviders,AppContexts}