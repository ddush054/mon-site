import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatBot from "react-simple-chatbot";
import "./Ainventory.css";
import Navbar from "./Navbar";

const properties = [
  {
    id: 1,
    price: "$930,459",
    rooms: "3",
    baths: "2",
    address: "123X LAMOUREUX, A , ON",
    image: "house4.png",
  },
  {
    id: 2,
    price: "$920,649",
    rooms: "3",
    baths: "2",
    address: "238X STEM, B, ON",
    image: "house5.png",
  },
  {
    id: 3,
    price: "$954,085",
    rooms: "3",
    baths: "3",
    address: "346X SITE, C, ON",
    image: "house6.png",
  },
  {
    id: 4,
    price: "$2,330,459",
    rooms: "6",
    baths: "3",
    address: "405X VANIER, D , ON",
    image: "house7.png",
  },
  {
    id: 5,
    price: "$1,990,679",
    rooms: "5",
    baths: "3",
    address: "578X CROSSROADS, X, ON",
    image: "house8.png",
  },
  {
    id: 6,
    price: "$1,700,300",
    rooms: "4",
    baths: "2",
    address: "603X DESMARAIS, F, ON",
    image: "house9.png",
  },
];

function Ainventory() {
  const navigate = useNavigate(); // useNavigate hook for navigation
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

  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [rooms, setRooms] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredSuggestions = properties
      .map((property) => property.address)
      .filter((address) => address.toLowerCase().includes(value.toLowerCase()));

    setSuggestions(filteredSuggestions);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleRooms = (event) => {
    setRooms(event.target.value);
  };

  const handleSearch = () => {
    const minPriceValue = parseFloat(minPrice.replace(/[$,]/g, ""));
    const maxPriceValue = parseFloat(maxPrice.replace(/[$,]/g, ""));
    const roomsValue = parseFloat(rooms);
    const results = properties.filter((property) => {
      const propertyPrice = parseFloat(property.price.replace(/[$,]/g, ""));
      return (
        property.address.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (isNaN(minPriceValue) || propertyPrice >= minPriceValue) &&
        (isNaN(maxPriceValue) || propertyPrice <= maxPriceValue) &&
        (isNaN(roomsValue) || property.rooms === rooms)
      );
    });
    setFilteredProperties(results);
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    handleSearch();
  };

  const handlePropertyClick = (property) => {
    navigate("/Abooking", { state: { property } });
  };

  return (
    <div className="Ainventory">
      <Navbar />
      <main>
        <div className="search-bar">
          <header>
            <strong>TROUVER UNE MAISON</strong>
          </header>
          <input
            type="text"
            placeholder="Ville, quartier, adresse"
            value={searchTerm}
            onChange={handleChange}
          />
          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
          <div className="filters">
            <select value={minPrice} onChange={handleMinPriceChange}>
              <option value="">Prix min</option>
              <option value="$500,000">$500,000</option>
              <option value="$700,000">$700,000</option>
              <option value="$900,000">$900,000</option>
              <option value="$1,000,000">$1,000,000</option>
              <option value="$2,000,000">$2,000,000</option>
            </select>
            <select value={maxPrice} onChange={handleMaxPriceChange}>
              <option>Prix max</option>
              <option value="$500,000">$500,000</option>
              <option value="$700,000">$700,000</option>
              <option value="$900,000">$900,000</option>
              <option value="$1,000,000">$1,000,000</option>
              <option value="$2,000,000">$2,000,000</option>
            </select>
            <select value={rooms} onChange={handleRooms}>
              <option>Chambres</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <select>
              <option>Bains</option>
            </select>
            <button onClick={handleSearch}>Recherche</button>
          </div>
        </div>
        <div className="property-list">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="property"
              onClick={() => handlePropertyClick(property)}
            >
              <img src={`/img/${property.image}`} alt="house" />
              <div className="property-details">
                <p className="price">{property.price}</p>
                <p className="rooms">Chambres: {property.rooms}</p>
                <p className="baths">Bains: {property.baths}</p>
                <p className="address">{property.address}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <div className="chatbot">
        <ChatBot steps={steps} floating={true} botDelay={1000} />
      </div>
    </div>
  );
}

export default Ainventory;

// import React from 'react';
// import './Ainventory.css';

// const properties = [
//   { id: 1, price: '$930,459', address: '123X Ville A, ON', image: 'house1.jpg' },
//   { id: 2, price: '$920,649', address: '123X Ville B, ON', image: 'house2.jpg' },
//   { id: 3, price: '$954,085', address: '123X Ville C, ON', image: 'house3.jpg' },
//   { id: 4, price: '$2,330,459', address: '123X Ville D, ON', image: 'house4.jpg' },
//   { id: 5, price: '$1,990,679', address: '123X Ville E, ON', image: 'house5.jpg' },
//   { id: 6, price: '$1,700,300', address: '123X Ville F, ON', image: 'house6.jpg' },
// ];

// function Ainventory() {
//   return (
//     <div className="Ainventory">
//       <header className="header">
//         <div className="logo">homefinder</div>
//         <nav>
//           <ul>
//             <li>Propriétés</li>
//             <li>Nouveauté</li>
//             <li>Soyez Approuvés</li>
//             <li>À propos de nous</li>
//           </ul>
//         </nav>
//       </header>
//       <main>
//         <div className="search-bar">
//           <input type="text" placeholder="Ville, quartier, adresse" />
//           <div className="filters">
//             <select><option>À vendre</option></select>
//             <select><option>Prix min</option></select>
//             <select><option>Prix max</option></select>
//             <select><option>Chambres</option></select>
//             <select><option>Bains</option></select>
//             <button>Recherche</button>
//           </div>
//         </div>
//         <div className="property-list">
//           {properties.map(property => (
//             <div key={property.id} className="property">
//               <img src={`/images/${property.image}`} alt="house" />
//               <div className="property-details">
//                 <p className="price">{property.price}</p>
//                 <p className="address">{property.address}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//       <div className="chat-bot">Chat Bot</div>
//     </div>
//   );
// }

// export default Ainve;
