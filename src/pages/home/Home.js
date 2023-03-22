import React from "react";

import Sidebar from "../../components/app/shared/sidebar/Sidebar";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">container</div>
    </div>
  );
};

export default Home;
