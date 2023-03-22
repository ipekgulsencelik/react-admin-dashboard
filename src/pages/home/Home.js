import React from "react";

import Sidebar from "../../components/app/shared/sidebar/Sidebar";
import Navbar from "../../components/app/shared/navbar/Navbar";
import Widget from "../../components/app/shared/widget/Widget";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
      </div>
    </div>
  );
};

export default Home;
