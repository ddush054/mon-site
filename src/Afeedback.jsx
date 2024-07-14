import React from "react";
import { useTranslation } from "react-i18next";
import "./Afeedback.css";
import Navbar from "./Navbar";

const feedbacks = [
  {
    name: "John Almeda",
    position: "HOMEFINDER CEO",
    text:
      "At HOMEFINDER, we are dedicated to providing exceptional real estate services, ensuring that our clients find their perfect home with ease and confidence. Our commitment to excellence and innovation sets us apart, making us the trusted choice for all your real estate needs.",
    image: "CEO.png",
  },
  {
    name: "Frank Kinney",
    position: "HOMEFINDER's Financial Analyst",
    text:
      "Over the past 20 years, this house has seen a remarkable appreciation of 150%, reflecting the robust growth and desirability of the neighborhood. This significant increase in value underscores the strategic importance of investing in prime real estate locations managed by HOMEFINDER.",
    image: "FA.png",
  },
  {
    name: "Stella Larson",
    position: "Real Estate agent 1",
    text:
      "This beautifully renovated home includes modern amenities and elegant finishes, making it perfect for today's buyer. Located in a family-friendly neighborhood with top-rated schools and plenty of parks, it's an ideal setting for raising children. Don't miss the chance to own a piece of prime real estate that's not only a home but a smart investment for your family's future. It is also available to rent.",
    image: "Real Estate.png",
  },
  {
    name: "Laurette Smith",
    position: "Owner #1",
    text:
      "Living in this home has been a dream come true; the recent renovations have made it even more comfortable and stylish. I wish I still lived in the neighborhood, LOL!",
    image: "Owner.png",
  },
  {
    name: "Mackenzie Alexander",
    position: "Customer #1",
    text:
      "The friendly neighborhood and excellent amenities have provided a wonderful environment for our family to grow and thrive, even though we only lived for 3 years.",
    image: "Cx1.png",
  },
  {
    name: "Carmen Leblanc",
    position: "Customer #2",
    text:
      "Being able to rent this house for the 4 years we stayed in it was nothing short of a great experience. The area it's located was great considering that I had a son and a dog, there was a public park 5 mins away from us as well as a daycare 10 mins away.",
    image: "Cx3.png",
  },
  {
    name: "Kelly Ferguson",
    position: "Customer #3",
    text:
      "Renting this house for the past five years has been a great experience; the modern upgrades and spacious layout made it feel like home. The safe neighborhood and proximity to good schools and parks were perfect for our family.",
    image: "Cx2.png",
  },
];

function Afeedback() {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="feedback">
      <Navbar />
      <main>
        <h1>{t("feedback.Text")}</h1>
        <div className="feedback-container">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="feedback-card">
              <img src={`/img/${feedback.image}`} alt={feedback.name} />
              <p>{feedback.text}</p>
              <h3>{feedback.name}</h3>
              <h4>{feedback.position}</h4>
            </div>
          ))}
        </div>
        {/* <div className="d-grid gap-2 mt-3">
          <button className="btn btn-black" type="button">
          <a href="/Abooking">
            BOOK YOUR VISIT FOR THIS HOUSE
             </a>
          </button>
        </div> */}
        <a
          href="/Abooking"
          class="btn btn-black"
          role="button"
          aria-pressed="true"
        >
          {t("feedback.Book")}
        </a>
      </main>
    </div>
  );
}

export default Afeedback;
