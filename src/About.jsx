import React from "react";
import ChatBot from "react-simple-chatbot";
import "./About.css";
import Navbar from "./Navbar";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 45.4215,
  lng: -75.6972,
};

const About = () => {
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
    <div className="App">
      <Navbar></Navbar>
      <main>
        <div className="map-selection">
          <div className="gmap-frame">
            <iframe
              width="100%"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=75%20Laurier%20Ave%20E,%20Ottawa,%20ON+(HomeFinder)&amp;t=h&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps trackers</a>
            </iframe>
          </div>
        </div>
        <div className="content">
          <div className="description">
            <h2>HOMEFINDER</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="chart">
            <h3>
              <strong>Median Price of Existing Home Sales</strong>
            </h3>
            <img
              src="img/Graph.png"
              alt="Median Price of Existing Home Sales"
            />
          </div>
        </div>
        <footer>
          <div className="hours">
            <h4>HORAIRES D'OUVERTURE :</h4>
            <p>Lundi : 10:00 AM - 6:30 PM</p>
            <p>Mardi : 10:00 AM - 6:30 PM</p>
            <p>Mercredi : 10:00 AM - 6:30 PM</p>
            <p>Jeudi : 10:00 AM - 6:30 PM</p>
            <p>Vendredi : 10:00 AM - 6:30 PM</p>
            <p>Samedi : 10:00 AM - 6:30 PM</p>
            <p>Dimanche : Fermé</p>
          </div>
          <div className="contact">
            <h4>NOUS JOINDRE :</h4>
            <p>Adresse : 75 Laurier Ave E, Ottawa, ON K1N 6N5</p>
            <p>Téléphone : (613) 562-5700</p>
          </div>
        </footer>
      </main>
      <ChatBot steps={steps} floating={true} botDelay={1000} />
    </div>
  );
};

export default About;
