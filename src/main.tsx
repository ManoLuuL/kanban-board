import "./index.css";
import "primereact/resources/themes/lara-dark-cyan/theme.css";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Toaster />
      <App />
    </BrowserRouter>
  </Suspense>
);
