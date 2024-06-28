import React from "react";
function Navbar() {
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
                PROPRIÉTÉS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Abooking">
                SOYEZ APPROUVÉS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/About">
                À PROPOS DE NOUS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
