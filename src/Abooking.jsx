import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "./Abooking.css";
import Navbar from "./Navbar";

function Abooking() {
  const [t, i18n] = useTranslation("global");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State to manage success alert visibility
  const [showDangerAlert, setShowDangerAlert] = useState(false); // State to manage danger alert visibility
  const [formData, setFormData] = useState({
    agent: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleButtonClick = () => {
    const { agent, date, time, firstName, lastName, email, phone } = formData;
    if (agent && date && time && firstName && lastName && email && phone) {
      setShowSuccessAlert(true);
      setShowDangerAlert(false);
    } else {
      setShowSuccessAlert(false);
      setShowDangerAlert(true);
    }
  };

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#c7c7c7ac",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#c7c7c7ac",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  const steps = [
    { id: "1", message: "What is your name?", trigger: "2" },
    { id: "2", user: true, trigger: "3" },
    { id: "3", message: "Hi {previousValue}, nice to meet you!", trigger: "4" },
    { id: "4", message: "How can I help you today?", trigger: "5" },
    {
      id: "5",
      options: [
        { value: 1, label: "I want to buy a house", trigger: "6" },
        { value: 2, label: "I want to sell a house", trigger: "7" },
        { value: 3, label: "I want to rent a house", trigger: "8" },
      ],
    },
    {
      id: "6",
      message:
        "Great! I can help you with that. What type of house are you looking for?",
      trigger: "9",
    },
    {
      id: "7",
      message:
        "Great! I can help you with that. What type of house are you selling?",
      trigger: "9",
    },
    {
      id: "8",
      message:
        "Great! I can help you with that. What type of house are you looking to rent?",
      trigger: "9",
    },
    {
      id: "9",
      options: [
        { value: 1, label: "Single Family", trigger: "10" },
        { value: 2, label: "Multi Family", trigger: "10" },
        { value: 3, label: "Condo", trigger: "10" },
        { value: 4, label: "Townhouse", trigger: "10" },
        { value: 5, label: "Mobile Home", trigger: "10" },
        { value: 6, label: "Land", trigger: "10" },
      ],
    },
    { id: "10", message: "Great! What is your budget?", trigger: "11" },
    { id: "11", user: true, trigger: "12" },
    {
      id: "12",
      message: "Great! What is your location preference?",
      trigger: "13",
    },
    { id: "13", user: true, trigger: "14" },
    {
      id: "14",
      message: "Great! I will find some options for you. Please wait a moment.",
      end: true,
    },
  ];

  return (
    <div className="booking-container">
      <Navbar></Navbar>
      <div className="container my-5">
        <div className="form-section">
          <h2 className="text-center mb-4">
            {t("booking.RÉSERVEZ VOTRE VISITE")}
          </h2>
          <div className="row justify-content-center mb-4">
            <div className="col-md-4">
              <select
                className="form-control"
                id="agent"
                value={formData.agent}
                onChange={handleInputChange}
              >
                <option value="">{t("booking.AGENT")}</option>
                <option>Jean Pierre</option>
                <option>Dustin Porier</option>
                <option>Samantha Murphy</option>
                <option>Ella Hernandez</option>
                <option>Ronald Keegan</option>
              </select>
            </div>
            <div className="col-md-4">
              <input
                type="date"
                id="date"
                className="form-control"
                placeholder="Date de visite"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-sm-4">
              <input
                type="time"
                id="time"
                className="form-control"
                placeholder="Heure de visite"
                value={formData.time}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="firstName">{t("booking.FIRSTNAME")}</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">{t("booking.LASTNAME")}</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t("booking.EMAIL")}</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">{t("booking.PHONE")}</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  className="btn btn-black"
                  type="button"
                  onClick={handleButtonClick}
                >
                  {t("booking.BOOK")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSuccessAlert && (
        <div className="alert alert-success" role="alert">
          <strong>CONGRATULATIONS!</strong> You have successfully booked your
          visit,{" "}
          <a href="#" className="alert-link">
            CLICK HERE FOR AN EMAIL CONFIRMATION.
          </a>
        </div>
      )}
      {showDangerAlert && (
        <div className="alert alert-danger" role="alert">
          <strong>Oops!</strong> Looks like there's missing information. Make
          sure to fill out the form and try again.
        </div>
      )}
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          floating={true}
          botDelay={1000}
          key={new Date()}
        />
      </ThemeProvider>
    </div>
  );
}

export default Abooking;

// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import ChatBot from "react-simple-chatbot";
// import { ThemeProvider } from "styled-components";
// import "./Abooking.css";
// import Navbar from "./Navbar";

// function Abooking() {
//   const [t, i18n] = useTranslation("global");
//   const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility

//   const handleChangeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   const handleButtonClick = () => {
//     setShowAlert(true); // Show the alert on button click
//   };

//   const theme = {
//     background: "#f5f8fb",
//     fontFamily: "Helvetica Neue",
//     headerBgColor: "#c7c7c7ac",
//     headerFontColor: "#fff",
//     headerFontSize: "15px",
//     botBubbleColor: "#c7c7c7ac",
//     botFontColor: "#fff",
//     userBubbleColor: "#fff",
//     userFontColor: "#4a4a4a",
//   };

//   const steps = [
//     { id: "1", message: "What is your name?", trigger: "2" },
//     { id: "2", user: true, trigger: "3" },
//     { id: "3", message: "Hi {previousValue}, nice to meet you!", trigger: "4" },
//     { id: "4", message: "How can I help you today?", trigger: "5" },
//     {
//       id: "5",
//       options: [
//         { value: 1, label: "I want to buy a house", trigger: "6" },
//         { value: 2, label: "I want to sell a house", trigger: "7" },
//         { value: 3, label: "I want to rent a house", trigger: "8" },
//       ],
//     },
//     {
//       id: "6",
//       message:
//         "Great! I can help you with that. What type of house are you looking for?",
//       trigger: "9",
//     },
//     {
//       id: "7",
//       message:
//         "Great! I can help you with that. What type of house are you selling?",
//       trigger: "9",
//     },
//     {
//       id: "8",
//       message:
//         "Great! I can help you with that. What type of house are you looking to rent?",
//       trigger: "9",
//     },
//     {
//       id: "9",
//       options: [
//         { value: 1, label: "Single Family", trigger: "10" },
//         { value: 2, label: "Multi Family", trigger: "10" },
//         { value: 3, label: "Condo", trigger: "10" },
//         { value: 4, label: "Townhouse", trigger: "10" },
//         { value: 5, label: "Mobile Home", trigger: "10" },
//         { value: 6, label: "Land", trigger: "10" },
//       ],
//     },
//     { id: "10", message: "Great! What is your budget?", trigger: "11" },
//     { id: "11", user: true, trigger: "12" },
//     {
//       id: "12",
//       message: "Great! What is your location preference?",
//       trigger: "13",
//     },
//     { id: "13", user: true, trigger: "14" },
//     {
//       id: "14",
//       message: "Great! I will find some options for you. Please wait a moment.",
//       end: true,
//     },
//   ];

//   return (
//     <div className="booking-container">
//       <Navbar></Navbar>
//       <div className="container my-5">
//         <div className="form-section">
//           <h2 className="text-center mb-4">
//             {t("booking.RÉSERVEZ VOTRE VISITE")}
//           </h2>
//           <div className="row justify-content-center mb-4">
//             <div className="col-md-4">
//               <select className="form-control">
//                 <option>{t("booking.AGENT")}</option>
//                 <option>Jean Pierre</option>
//                 <option>Dustin Porier</option>
//                 <option>Samantha Murphy</option>
//                 <option>Ella Hernandez</option>
//                 <option>Ronald Keegan</option>
//               </select>
//             </div>
//             <div className="col-md-4">
//               <input type="date" placeholder="Date de visite" />
//             </div>
//             <div className="col-sm-4">
//               <input type="time" placeholder="Heure de visite" />
//             </div>
//           </div>
//           <div className="row justify-content-center">
//             <div className="col-md-6">
//               <div className="form-group">
//                 <label htmlFor="firstName">{t("booking.FIRSTNAME")}</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="firstName"
//                   placeholder="first name"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="lastName">{t("booking.LASTNAME")}</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="lastName"
//                   placeholder="last name"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">{t("booking.EMAIL")}</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   placeholder="email"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="phone">{t("booking.PHONE")}</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="phone"
//                   placeholder="phone number"
//                 />
//               </div>
//               <div className="d-grid gap-2 mt-3">
//                 <button
//                   className="btn btn-black"
//                   type="button"
//                   onClick={handleButtonClick}
//                 >
//                   {t("booking.BOOK")}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showAlert && (
//         <div className="alert alert-success" role="alert">
//           <strong>CONGRATULATIONS!</strong> You have successfully booked your
//           visit,{" "}
//           <a href="#" className="alert-link">
//             CLICK HERE FOR AN EMAIL CONFIRMATION.
//           </a>
//         </div>
//       )}
//       <div class="alert alert-danger" role="alert">
//   This is a danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
// </div>
//       <ThemeProvider theme={theme}>
//         <ChatBot
//           steps={steps}
//           floating={true}
//           botDelay={1000}
//           key={new Date()}
//         />
//       </ThemeProvider>
//     </div>
//   );
// }

// export default Abooking;

// import React from "react";
// import { useTranslation } from "react-i18next";
// import ChatBot from "react-simple-chatbot";
// import { ThemeProvider } from "styled-components";
// import "./Abooking.css";
// import Navbar from "./Navbar";

// function Abooking() {
//   const [t, i18n] = useTranslation("global");

//   const handleChangeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   const theme = {
//     background: "#f5f8fb",
//     fontFamily: "Helvetica Neue",
//     headerBgColor: "#c7c7c7ac",
//     headerFontColor: "#fff",
//     headerFontSize: "15px",
//     botBubbleColor: "#c7c7c7ac",
//     botFontColor: "#fff",
//     userBubbleColor: "#fff",
//     userFontColor: "#4a4a4a",
//   };
//   const steps = [
//     { id: "1", message: "What is your name?", trigger: "2" },
//     { id: "2", user: true, trigger: "3" },
//     { id: "3", message: "Hi {previousValue}, nice to meet you!", trigger: "4" },
//     { id: "4", message: "How can I help you today?", trigger: "5" },
//     {
//       id: "5",
//       options: [
//         { value: 1, label: "I want to buy a house", trigger: "6" },
//         { value: 2, label: "I want to sell a house", trigger: "7" },
//         { value: 3, label: "I want to rent a house", trigger: "8" },
//       ],
//     },
//     {
//       id: "6",
//       message:
//         "Great! I can help you with that. What type of house are you looking for?",
//       trigger: "9",
//     },
//     {
//       id: "7",
//       message:
//         "Great! I can help you with that. What type of house are you selling?",
//       trigger: "9",
//     },
//     {
//       id: "8",
//       message:
//         "Great! I can help you with that. What type of house are you looking to rent?",
//       trigger: "9",
//     },
//     {
//       id: "9",
//       options: [
//         { value: 1, label: "Single Family", trigger: "10" },
//         { value: 2, label: "Multi Family", trigger: "10" },
//         { value: 3, label: "Condo", trigger: "10" },
//         { value: 4, label: "Townhouse", trigger: "10" },
//         { value: 5, label: "Mobile Home", trigger: "10" },
//         { value: 6, label: "Land", trigger: "10" },
//       ],
//     },
//     { id: "10", message: "Great! What is your budget?", trigger: "11" },
//     { id: "11", user: true, trigger: "12" },
//     {
//       id: "12",
//       message: "Great! What is your location preference?",
//       trigger: "13",
//     },
//     { id: "13", user: true, trigger: "14" },
//     {
//       id: "14",
//       message: "Great! I will find some options for you. Please wait a moment.",
//       end: true,
//     },
//   ];
//   return (
//     <div className="booking-container">
//       <Navbar></Navbar>
//       <div class="container my-5">
//         <div class="form-section">
//           <h2 class="text-center mb-4">{t("booking.RÉSERVEZ VOTRE VISITE")}</h2>
//           <div class="row justify-content-center mb-4">
//             <div class="col-md-4">
//               <select class="form-control">
//                 <option>{t("booking.AGENT")}</option>
//                 <option>Jean Pierre</option>
//                 <option>Dustin Porier</option>
//                 <option>Samantha Murphy</option>
//                 <option>Ella Hernandez</option>
//                 <option>Ronald Keegan</option>
//               </select>
//             </div>
//             <div class="col-md-4">
//               <input type="date" placeholder="Date de visite" />
//             </div>
//             <div class="col-sm-4">
//               <input type="time" placeholder="Heure de visite" />
//             </div>
//           </div>
//           <div class="row justify-content-center">
//             <div class="col-md-6">
//               <div class="form-group">
//                 <label for="firstName">{t("booking.FIRSTNAME")}</label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="firstName"
//                   placeholder="first name"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="lastName">{t("booking.LASTNAME")}</label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="lastName"
//                   placeholder="last name"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="email">{t("booking.EMAIL")}</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="email"
//                   placeholder="email"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="phone">{t("booking.PHONE")}</label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="phone"
//                   placeholder="phone number"
//                 />
//               </div>
//               <div class="d-grid gap-2 mt-3">
//                 <button class="btn btn-black" type="button">
//                   {t("booking.BOOK")}
//                 </button>
//               </div>{" "}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="form-container">
//         <div className="search-bar2">
//         <h1>RÉSERVEZ VOTRE VISITE</h1>
//           <select>
//             <option>Choisi un agent mobilier</option>
//           </select>
//           <input type="date" placeholder="Date de visite" />
//           <input type="time" placeholder="Heure de visite" />
//           <button>Recherche</button>
//         </div>
//         <form>
//           <label>
//             Prénom
//             <input type="text" placeholder="prénom" />
//           </label>
//           <label>
//             Nom de famille
//             <input type="text" placeholder="nom de famille" />
//           </label>
//           <label>
//             Email
//             <input type="email" placeholder="email" />
//           </label>
//           <label>
//             Numéro de téléphone
//             <input type="tel" placeholder="#" />
//           </label>
//           <button type="submit">Réservez</button>
//         </form>
//       </div> */}
//       <div class="alert alert-success" role="alert">
//         This is a success alert with{" "}
//         <a href="#" class="alert-link">
//           an example link
//         </a>
//         . Give it a click if you like.
//       </div>
//       <ThemeProvider theme={theme}>
//         <ChatBot
//           steps={steps}
//           floating={true}
//           botDelay={1000}
//           key={new Date()}
//         />
//       </ThemeProvider>{" "}
//     </div>
//   );
// }

// export default Abooking;
