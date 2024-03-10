import React from "react";
import { createRoot } from "react-dom/client";

const Shell = React.lazy(() => import("host/Shell"));

import "./index.css";

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Shell />
    </React.Suspense>
  );
}
const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
