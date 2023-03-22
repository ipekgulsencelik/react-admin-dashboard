import React from "react";

import "./list.scss";

import Sidebar from "../../components/app/shared/sidebar/Sidebar";
import Navbar from "../../components/app/shared/navbar/Navbar";
import Datatable from "../../components/app/datatable/Datatable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
