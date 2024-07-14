import i18next from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import { initReactI18next } from "react-i18next";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Abooking from "./Abooking";
import About from "./About";
import Afeedback from "./Afeedback";
import Ainventory from "./Ainventory";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";

const i18n = i18next.createInstance();

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Ainventory",
    element: <Ainventory />,
  },
  {
    path: "Abooking",
    element: <Abooking />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Afeedback",
    element: <Afeedback />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <I18nextProvider i18n={i18n}> </I18nextProvider>
    <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
