// import React from "react";
// import { useTranslation } from "react-i18next";
// // import "./Navbar.css"; // Ensure you have the necessary CSS file

// function Navbar() {
//   const { t, i18n } = useTranslation("global");

//   const handleChangeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <a href="/">
//           <img src="img/logo.png" alt="HomeFinder" className="logo-img" />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <a className="nav-link" href="/Ainventory">
//                 {t("navbar.PROPRIÉTÉS")}
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/Abooking">
//                 {t("navbar.SOYEZ APPROUVÉS")}
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/About">
//                 {t("navbar.À PROPOS DE NOUS")}
//               </a>
//             </li>
//             <li className="nav-item">
//               <button onClick={() => handleChangeLanguage("en")}>EN</button>
//             </li>
//             <li className="nav-item">
//               <button onClick={() => handleChangeLanguage("es")}>ES</button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a href="/">
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
                {t("navbar.PROPRIÉTÉS")}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Abooking">
                {t("navbar.SOYEZ APPROUVÉS")}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/About">
                {t("navbar.À PROPOS DE NOUS")}
              </a>
            </li>
            <button onClick={() => handleChangeLanguage("en")}>English</button>
            <button onClick={() => handleChangeLanguage("es")}>Espagnol</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
