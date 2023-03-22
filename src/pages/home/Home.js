import React from "react";

import Sidebar from "../../components/app/shared/sidebar/Sidebar";
import Navbar from "../../components/app/shared/navbar/Navbar";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
