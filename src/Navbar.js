import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Complain } from "./pages/Complain";
import { Services } from "./pages/Services";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Pages } from "./pages/Pages";
import { CrimeDetails } from "./pages/CrimeDetails";
import { Contact } from "./pages/Contact";


const Navbar = () => {
  return (
    <div>
      <nav class="navbar sticky-top navbar-expand-sm ">
        <div class="container-fluid justify-content-end">
          
          <a
            class="navbar-brand"
            href="#"
            style={{ fontSize: "25px", fontWeight: "bold", marginLeft: "15px" }}
          >
            Interno
          </a>
          <ul class="navbar-nav w-100  justify-content-center">
            <li class="nav-item">
              <Link class="nav-link mx-3" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link mx-3" to="/Pages"> 
                Pages
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link mx-3" to="/Services">
                Services
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link mx-3" to="/Complain">
                Project
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link mx-3" to="/SCrimeDetails">
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link mx-3" to="/Contact">
                Contact
              </Link>
            </li>
            
            
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Complain" element={<Complain />} />
        <Route path="/CrimeDetails" element={<CrimeDetails />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Navbar;
