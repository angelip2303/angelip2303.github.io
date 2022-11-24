import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Layout from "layouts/Layout";

const Projects = React.lazy(() => import("./pages/Projects"));
const Events = React.lazy(() => import("./pages/Events"));

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="projects"
          element={
            <React.Suspense fallback={<>...</>}>
              <Projects />
            </React.Suspense>
          }
        />
        <Route
          path="events"
          element={
            <React.Suspense fallback={<>...</>}>
              <Events />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
