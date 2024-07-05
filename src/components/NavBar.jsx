import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src="images/Perfume.png" alt="Logo" className="logo" />
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link active text-dark"
                  aria-current="page"
                  href="#"
                >
                  Lanzamientos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Fragancias Masculinas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Fragancias Femeninas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Cofres y sets
                </a>
              </li>
              <li className="col">
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
