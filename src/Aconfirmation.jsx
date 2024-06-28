// import React, { useEffect, useState } from "react";
// import "./Aconfirmation.css";
// import Navbar from "./Navbar";

// function Aconfirmation({ bookingDetails }) {
//   const [details, setDetails] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     agent: "",
//     date: "",
//     time: "",
//   });

//   useEffect(() => {
//     if (bookingDetails) {
//       setDetails(bookingDetails);
//     }
//   }, [bookingDetails]);

//   return (
//     <div className="confirmation-container">
//       <Navbar />
//       <div className="confirmation-content">
//         <img
//           src="/path-to-your-car-image.png"
//           alt="Car"
//           className="car-image"
//         />
//         <h2 className="confirmation-title">RÉSERVATION CONFIRMÉE</h2>
//         <p className="confirmation-message">
//           Merci {details.firstName} {details.lastName}, d'avoir choisi
//           HOMEFINDER
//         </p>
//         <div className="confirmation-details">
//           <div className="detail-item">
//             <h4>Lundi {details.date}</h4>
//             <p>Heure d'arrivée : {details.time}</p>
//           </div>
//           <div className="detail-item">
//             <h4>Lundi {details.date}</h4>
//             <p>Heure de sortie : {details.time}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Aconfirmation;
