import React from "react";
import { Link } from "react-router-dom";
import LandingPagePage from "./LandingPage";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      
      <ul>
        <li>
          <Link to="/landingpage">LandingPage</Link>
          <LandingPagePage/>
        </li>
      </ul>
    </div>
  );
};
export default Home;
