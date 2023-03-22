import React from "react";

import Sidebar from "../../components/app/shared/sidebar/Sidebar";
import Navbar from "../../components/app/shared/navbar/Navbar";
import Widget from "../../components/app/shared/widget/Widget";
import Featured from "../../components/app/shared/featured/Featured";
import Chart from "../../components/app/shared/chart/Chart";

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
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
