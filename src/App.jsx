import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GlobalStyle } from "./GlobalStyle";
import GoToTop from "./components/GoToTop";
import Products from "./Products";
import { AppProvider } from "./context";
import PartnersWith from "./PartnersWith";
// import Partner1 from "./PartnerDetails/Partner1";
// import Partner2 from "./PartnerDetails/Partner2";
import Partnerdetails from "./Partnerdetails/Partnerdetails"
//A theme is a collection of values that define the look and feel of your application. This can include things like colors, fonts, and spacing. It uses the context API to make the theme available to all components in the tree, without having to pass it down manually through props.
import { ThemeProvider } from "styled-components";
import Error from "./Error";

// here we are importing the navbar home page, about page, these are the routes of the pages

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 245)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/partnerswith" element={<PartnersWith />} />
          {/* <Route path="/PartnerDetails/partner1" element={<Partner1 />} />
          <Route path="/PartnerDetails/partner2" element={<Partner2 />} /> */}
          <Route path="/partnerdetails/:id" element={<Partnerdetails />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <GoToTop />
        <Footer />
      </BrowserRouter>
    </AppProvider>
    </ThemeProvider>
  );
};
// these are the routes that are used to fetch the navbar and the data

export default App;
