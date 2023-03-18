import React from "react";

import { Header } from "./";

const Layout = ({ children }) => {
  return (
    <div className="font-poppins font-thin">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
