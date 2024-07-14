import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "./About.css";
import Navbar from "./Navbar";

const About = () => {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
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
    <div className="Abooking">
      <Navbar></Navbar>
      <main>
        <div className="map-selection">
          <div className="gmap-frame">
            <iframe
              title="map"
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
            <p>{t("about.Text")}</p>
          </div>
          {/* <div className="chart">
            <h3>
              <strong>Median Price of Existing Home Sales</strong>
            </h3>
            <img
              src="img/Graph.png"
              alt="Median Price of Existing Home Sales"
            />
          </div> */}
          <Container>
            <div class="embed-responsive-item">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/zsZv3thbl1w?si=q3gq-Nxged9zcPQF"
                title="video"
                allowFullScreen
              ></iframe>
            </div>
          </Container>
        </div>
        <footer>
          <div className="hours">
            <h4>{t("footer.HORAIRES D'OUVERTURE")}</h4>
            <p>{t("footer.LUNDI-SAMEDI")}</p>
            <p>{t("footer.DIMANCHE")}</p>
          </div>
          <div className="contact">
            <h4>{t("footer.NOUS JOINDRE")}</h4>
            <p>
              <i className="bi bi-geo-alt-fill"></i> {t("footer.ADRESSE")}
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i> {t("footer.TÉLÉPHONE")}
            </p>
          </div>
        </footer>
      </main>
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
};

export default About;
