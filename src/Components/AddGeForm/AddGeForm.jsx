import React from "react";
// import "./AddGeForm.css";
import Btn from "../Btn/Btn";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
//import { AddForm } from "../AddForm/AddForm";
import { Outlet } from "react-router-dom";

export const AddGeForm = () => {
  return (
    <div className="flex flex-row bg-neutral-100 min-h-screen w-screen ">
      <Menu />

      <div className="">
        <div className="bg-orange-400 flex-1 h-16 w-screen">
          <Header />
        </div>
        <div className=" h-screen">
          {<Outlet />}
        </div>
      </div>
    </div>
  );
};
export default AddGeForm;
