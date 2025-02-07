import React from "react";
import Header from "./ui/header";
import Footer from "./ui/Footer";
import ThemeContextProvider from "@/store/ThemeContext";

const Layout = ({ children }) => {
  return (
    <div>
      <ThemeContextProvider>
        <Header />
        {children}
        <Footer />
      </ThemeContextProvider>
    </div>
  );
};

export default Layout;
