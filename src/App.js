import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ChatBot from "react-simple-chatbot";
import "./App.css"; // Add your custom CSS here if needed
import Navbar from "./Navbar";

const App = () => {
  const steps = [
    {
      id: "1",
      message: "What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
      trigger: "4",
    },
    {
      id: "4",
      message: "How can I help you today?",
      trigger: "5",
    },
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
    {
      id: "10",
      message: "Great! What is your budget?",
      trigger: "11",
    },
    {
      id: "11",
      user: true,
      trigger: "12",
    },
    {
      id: "12",
      message: "Great! What is your location preference?",
      trigger: "13",
    },
    {
      id: "13",
      user: true,
      trigger: "14",
    },
    {
      id: "14",
      message: "Great! I will find some options for you. Please wait a moment.",
      end: true,
    },
  ];
  return (
    <body>
      <header class="d-flex justify-content-between align-items-center py-3">
        <Navbar></Navbar>
        {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
            <a href="App.js">
              <img src="img/logo.png" alt="HomeFinder" class="logo-img" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="/Ainventory">
                    PROPRIÉTÉS
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    NOUVEAUTÉ
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    SOYEZ APPROUVÉS
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    À PROPOS DE NOUS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
      </header>

      <div class="hero-image">
        <img src="img/Banner.png" alt="Banner" class="img-fluid" />
      </div>

      <section class="special-offers text-center my-5">
        <h2>LES OFFRES SPÉCIALES</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="offer-card">
              <img src="img/house1.png" alt="House 1" class="img-fluid" />
              <p class="price">
                <span class="old-price">$1,120,999</span> $1,000,459
              </p>
              <p class="location">123X Ville A, ON</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="offer-card">
              <img src="img/house2.png" alt="House 2" class="img-fluid" />
              <p class="price">
                <span class="old-price">$920,999</span> $729,900
              </p>
              <p class="location">123X Ville B, ON</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="offer-card">
              <img src="img/house3.png" alt="House 3" class="img-fluid" />
              <p class="price">
                <span class="old-price">$1,560,999</span> $1,100,370
              </p>
              <p class="location">123X Ville C, ON</p>
            </div>
          </div>
        </div>
      </section>

      <ChatBot steps={steps} floating={true} botDelay={1000} />
    </body>
  );
};

export default App;
