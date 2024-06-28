import React from "react";
import ChatBot from "react-simple-chatbot";
import "./Abooking.css";
import Navbar from "./Navbar";

function Abooking() {
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
      <div class="container my-5">
        <div class="form-section">
          <h2 class="text-center mb-4">RÉSERVEZ VOTRE VISITE</h2>
          <div class="row justify-content-center mb-4">
            <div class="col-md-4">
              <select class="form-control">
                <option>Choisissez un agent mobilier</option>
                <option>Jean Pierre</option>
                <option>Dustin Porier</option>
                <option>Samantha Murphy</option>
                <option>Ella Hernandez</option>
                <option>Ronald Keegan</option>
              </select>
            </div>
            <div class="col-md-4">
              <input type="date" placeholder="Date de visite" />
            </div>
            <div class="col-sm-4">
              <input type="time" placeholder="Heure de visite" />
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="form-group">
                <label for="firstName">Prénom</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="prénom"
                />
              </div>
              <div class="form-group">
                <label for="lastName">Nom de famille</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder="nom de famille"
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="email"
                />
              </div>
              <div class="form-group">
                <label for="phone">Numéro de téléphone</label>
                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  placeholder="# de téléphone"
                />
              </div>
              <div class="d-grid gap-2 mt-3">
                <button class="btn btn-black" type="button">
                  RESERVER
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="form-container">
        <div className="search-bar2">
        <h1>RÉSERVEZ VOTRE VISITE</h1>
          <select>
            <option>Choisi un agent mobilier</option>
          </select>
          <input type="date" placeholder="Date de visite" />
          <input type="time" placeholder="Heure de visite" />
          <button>Recherche</button>
        </div>
        <form>
          <label>
            Prénom
            <input type="text" placeholder="prénom" />
          </label>
          <label>
            Nom de famille
            <input type="text" placeholder="nom de famille" />
          </label>
          <label>
            Email
            <input type="email" placeholder="email" />
          </label>
          <label>
            Numéro de téléphone
            <input type="tel" placeholder="#" />
          </label>
          <button type="submit">Réservez</button>
        </form>
      </div> */}
      <ChatBot steps={steps} floating={true} botDelay={1000} />
    </div>
  );
}

export default Abooking;
