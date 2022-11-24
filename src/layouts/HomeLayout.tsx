import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout(): JSX.Element {
  return (
    <div id="home">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
