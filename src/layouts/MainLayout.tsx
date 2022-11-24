import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout(): JSX.Element {
  return (
    <React.Fragment>
      <Header />
      <div id="content">
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
}
